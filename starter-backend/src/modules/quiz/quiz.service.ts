import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, Like } from 'typeorm';
import { QuizAttempt } from '../quiz-attempt/entities/quiz-attempt.entity';
import { User } from '../user/entities/user.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { QuizSociologicalData } from '../quiz-sociological-data/entities/quiz-sociological-data.entity';
import { CreateQuizSociologicalDataDto } from '../quiz-sociological-data/dto/create-quiz-sociological-data.dto';
import { ConflictException } from '@nestjs/common';
import { UpdateQuizOwnerDto } from './dto/update-quiz-owner.dto';
import { QuizQuestionAnswer } from '../quiz-question-answer/entities/quiz-question-answer.entity';
import { QuizStatisticalSociologicalDataDto } from './dto/quiz-statistical-sociological-data.dto';
import {
  QuizDetailsDto,
  QuizQuestionDto,
  QuizQuestionOptionDto,
  QuizSociologicalDataDto,
  QuizUserDetailsDto,
} from './dto/quiz-details.dto';
import { SimplifiedQuizListDto } from './dto/simplified-quiz-list.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(QuizAttempt)
    private readonly quizAttemptRepository: Repository<QuizAttempt>,
    @InjectRepository(QuizQuestionAnswer)
    private readonly quizQuestionAnswerRepository: Repository<QuizQuestionAnswer>,
    @InjectRepository(QuizSociologicalData)
    private readonly sociologicalDataRepository: Repository<QuizSociologicalData>,
  ) {}

  // Criação do quiz, com verificação de usuário e dados sociológicos
  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    // Handle identifier uniqueness
    const existingQuiz = await this.quizRepository.findOne({
      where: { identifier: createQuizDto.identifier },
    });

    if (existingQuiz) {
      throw new ConflictException('Quiz identifier already exists');
    }

    let user: User;
    if (createQuizDto.userId) {
      user = await this.userRepository.findOne({
        where: { index: createQuizDto.userId },
      });
      if (!user) {
        throw new NotFoundException(
          `Usuário com ID ${createQuizDto.userId} não encontrado.`,
        );
      }
    }

    // Handle sociological data
    const {
      sociologicalData: sociologicalDataDto,
      questions,
      ...quizData
    } = createQuizDto;
    const sociologicalMap: Record<string, QuizSociologicalData> = {};

    // Handle sociological data
    const sociologicalData = await Promise.all(
      sociologicalDataDto.map(async (data: CreateQuizSociologicalDataDto) => {
        // Check if sociological data with the same name already exists
        let existingData = await this.sociologicalDataRepository.findOne({
          where: { name: data.name },
        });

        // If it doesn't exist, create a new entry
        if (!existingData) {
          existingData = this.sociologicalDataRepository.create(data);
          await this.sociologicalDataRepository.save(existingData);
        }

        sociologicalMap[existingData.name] = existingData; // Usa o índice como chave
        return existingData; // Retorna o dado sociológico existente ou criado
      }),
    );

    // Handle each question and its options
    const processedQuestions = await Promise.all(
      questions.map(async (question) => {
        const processedOptions = await Promise.all(
          question.options.map(async (option) => {
            const sociologicalData = sociologicalMap[option.sociological.name];
            option.sociologicalId = sociologicalData.index;

            if (!option.sociologicalId) {
              throw new Error(
                `Sociological data not found for ID: ${option.sociologicalId}`,
              );
            }

            return {
              ...option,
              sociologicalData, // Certifique-se de que está passando o objeto completo aqui
            };
          }),
        );

        return {
          ...question,
          options: processedOptions,
        };
      }),
    );

    // Create and save the new quiz, associando os dados sociológicos
    const quiz = this.quizRepository.create({
      owner: user,
      ...quizData,
      sociologicalData,
      questions: processedQuestions,
    });

    return this.quizRepository.save(quiz);
  }

  async updateQuizOwner(
    quizId: number,
    updateQuizOwnerDto: UpdateQuizOwnerDto,
  ): Promise<Quiz> {
    // Verifica se o quiz existe
    const quiz = await this.quizRepository.findOne({
      where: { index: quizId },
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${quizId} not found`);
    }

    // Verifica se o novo proprietário existe
    const owner = await this.userRepository.findOne({
      where: { index: updateQuizOwnerDto.ownerId },
    });

    if (!owner) {
      throw new NotFoundException(
        `User with ID ${updateQuizOwnerDto.ownerId} not found`,
      );
    }

    // Atualiza o proprietário do quiz
    quiz.owner = owner;

    // Salva a atualização
    return this.quizRepository.save(quiz);
  }

  // Função para verificar ou criar os dados sociológicos
  async verifyOrCreateSociologicalData(
    sociologicalData: CreateQuizSociologicalDataDto[],
  ): Promise<Record<string, number>> {
    const sociologicalMap: Record<string, number> = {};

    for (const data of sociologicalData) {
      let existingData = await this.sociologicalDataRepository.findOne({
        where: { name: data.name },
      });

      if (!existingData) {
        existingData = await this.sociologicalDataRepository.save(
          this.sociologicalDataRepository.create(data),
        );
      }

      sociologicalMap[data.name] = existingData.index;
    }

    return sociologicalMap;
  }

  // Função para atualizar os dados sociológicos com os valores corretos
  updateQuestionWithSociologicalIds(
    createQuizDto: CreateQuizDto,
    sociologicalMap: Record<string, number>,
  ): void {
    for (const sociological of createQuizDto.sociologicalData) {
      sociological.id = sociologicalMap[sociological.name];
    }
  }

  async findAll(options: {
    page: number;
    limit: number;
    search?: string;
    status?: 'draft' | 'published' | 'archived';
  }): Promise<{ data: Quiz[]; total: number }> {
    const { page, limit, search, status } = options;

    const findOptions: FindManyOptions<Quiz> = {
      skip: (page - 1) * limit,
      take: limit,
      relations: [
        'questions',
        'questions.options',
        'sociologicalData',
        'owner',
        'attempts',
      ],
      where: {},
    };

    if (search) {
      findOptions.where = [
        { title: Like(`%${search}%`) },
        { identifier: Like(`%${search}%`) },
      ];
    }

    if (status) {
      findOptions.where = {
        ...findOptions.where,
        status,
      };
    }

    const [quizzes, total] =
      await this.quizRepository.findAndCount(findOptions);

    // Iterar sobre cada quiz para calcular o completionRate
    const quizDetailsList = quizzes.map((quiz) => {
      // Calcular o número total de tentativas e as tentativas concluídas para este quiz
      const totalAttempts = quiz.attempts.length;
      const completedAttempts = quiz.attempts.filter(
        (attempt) => attempt.isCompleted,
      ).length;

      // Calcular a taxa de conclusão (completionRate) como porcentagem
      const completionRate =
        totalAttempts > 0 ? (completedAttempts / totalAttempts) * 100 : 0;

      // Montar o objeto `QuizWithDetails` com o campo completionRate
      return {
        index: quiz.index,
        title: quiz.title,
        identifier: quiz.identifier,
        type: quiz.type,
        description: quiz.description,
        category: quiz.category,
        image: quiz.image,
        audio: quiz.audio,
        status: quiz.status,
        sociologicalData: quiz.sociologicalData,
        questions: quiz.questions,
        owner: quiz.owner,
        attempts: quiz.attempts,
        completionRate: parseFloat(completionRate.toFixed(2)),
        createdAt: quiz.createdAt,
      } as Quiz;
    });

    return { data: quizDetailsList, total };
  }

  async findOne(id: number): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne({
      where: { index: id },
      relations: [
        'questions',
        'questions.options',
        //'questions.subQuestions',
        'sociologicalData',
        //'owner',
      ],
    });
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
    return quiz;
  }

  async update(id: number, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    const quiz = await this.quizRepository.preload({
      index: id,
      ...updateQuizDto,
    });
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
    return this.quizRepository.save(quiz);
  }

  async remove(id: number): Promise<void> {
    const result = await this.quizRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
  }

  async findByOwner(ownerId: string): Promise<Quiz[]> {
    return this.quizRepository.find({
      where: { owner: { index: ownerId } },
      relations: ['questions', 'sociologicalData'],
    });
  }

  async findLatestQuiz(): Promise<QuizDetailsDto> {
    // Buscar o último quiz adicionado diretamente
    const quiz = await this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.owner', 'owner')
      .leftJoinAndSelect('quiz.sociologicalData', 'quizSociologicalData')
      .leftJoinAndSelect('quiz.questions', 'questions')
      .leftJoinAndSelect('questions.options', 'options')
      .leftJoinAndSelect('options.sociologicalData', 'optionSociologicalData')
      .orderBy('quiz.createdAt', 'DESC')
      .take(1)
      .getOne();

    if (!quiz) {
      throw new NotFoundException('Nenhum quiz encontrado.');
    }

    // **Correção no cálculo de totalAttempts**
    const totalAttempts = await this.quizAttemptRepository.count({
      where: { quiz: { index: quiz.index } },
    });

    // **Cálculo de completedAttempts e completionRate**
    const completedAttempts = await this.quizAttemptRepository.count({
      where: { quiz: { index: quiz.index }, isCompleted: true },
    });

    const completionRate =
      totalAttempts > 0 ? (completedAttempts / totalAttempts) * 100 : 0;

    // **Cálculo de averageCompletionTime**
    const completedAttemptsData = await this.quizAttemptRepository.find({
      where: { quiz: { index: quiz.index }, isCompleted: true },
      select: ['attemptedAt', 'completedAt'],
    });

    let totalCompletionTime = 0;
    const numberOfCompletedAttempts = completedAttemptsData.length;

    for (const attempt of completedAttemptsData) {
      if (attempt.attemptedAt && attempt.completedAt) {
        const timeDiff =
          attempt.completedAt.getTime() - attempt.attemptedAt.getTime();
        totalCompletionTime += timeDiff;
      }
    }

    const averageCompletionTime =
      numberOfCompletedAttempts > 0
        ? totalCompletionTime / numberOfCompletedAttempts
        : 0;

    // Obter todas as respostas para o quiz
    const answers = await this.quizQuestionAnswerRepository.find({
      where: { question: { quiz: { index: quiz.index } } },
      relations: ['option', 'option.sociologicalData'],
    });

    // Inicializar variáveis para cálculos
    let totalWeight = 0;
    let totalResponses = 0;

    // Mapa para armazenar os dados sociológicos e seus valores
    const sociologicalDataMap = new Map<
      number,
      QuizStatisticalSociologicalDataDto
    >();

    for (const answer of answers) {
      if (answer.option) {
        totalWeight += answer.option.weight;
        totalResponses++;

        // Dados sociológicos associados à opção
        const sociologicalData = answer.option.sociologicalData;

        if (sociologicalData) {
          let dataDto = sociologicalDataMap.get(sociologicalData.index);
          if (!dataDto) {
            dataDto = {
              id: sociologicalData.index,
              name: sociologicalData.name,
              color: sociologicalData.color,
              value: 0,
            };
            sociologicalDataMap.set(sociologicalData.index, dataDto);
          }
          dataDto.value += answer.option.weight;
        }
      }
    }

    const averageWeight = totalResponses > 0 ? totalWeight / totalResponses : 0;

    const sociologicalDataStatistics = Array.from(sociologicalDataMap.values());

    // Mapear as perguntas para QuizQuestionDto
    const questions: QuizQuestionDto[] = quiz.questions.map((question) => {
      const options: QuizQuestionOptionDto[] = question.options.map(
        (option) => {
          const sociologicalData: QuizSociologicalDataDto =
            option.sociologicalData
              ? {
                  id: option.sociologicalData.index,
                  name: option.sociologicalData.name,
                  color: option.sociologicalData.color,
                }
              : null;

          return {
            id: option.index,
            title: option.title,
            isChecked: option.isChecked,
            weight: option.weight,
            sociologicalData,
          } as QuizQuestionOptionDto;
        },
      );

      return {
        id: question.index,
        type: question.type,
        question: question.question,
        answer: question.answer,
        image: question.image,
        audio: question.audio,
        options,
      } as QuizQuestionDto;
    });

    const userDetails = {
      id: quiz.owner.index,
      email: quiz.owner.email,
      username: quiz.owner.username,
      fullName: quiz.owner.fullName,
    } as QuizUserDetailsDto;

    // Montar o objeto QuizDetailsDto
    const quizDetails: QuizDetailsDto = {
      id: quiz.index,
      title: quiz.title,
      identifier: quiz.identifier,
      description: quiz.description,
      category: quiz.category,
      image: quiz.image,
      audio: quiz.audio,
      sociologicalDataStatistics,
      totalAttempts,
      averageWeight,
      completionRate,
      averageCompletionTime,
      questions,
      owner: userDetails,
      createdAt: quiz.createdAt,
    };

    return quizDetails;
  }

  async getAllQuizzesSimplified(): Promise<SimplifiedQuizListDto[]> {
    // Buscar os últimos quizzes adicionados
    const quizzes = await this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.owner', 'owner')
      .orderBy('quiz.createdAt', 'DESC')
      .getMany();

    if (!quizzes.length) {
      throw new NotFoundException('Nenhum quiz encontrado.');
    }

    // Iterar sobre cada quiz para calcular as métricas necessárias
    const quizDetailsList = await Promise.all(
      quizzes.map(async (quiz) => {
        // **Correção no cálculo de totalAttempts**
        const totalAttempts = await this.quizAttemptRepository.count({
          where: { quiz: { index: quiz.index } },
        });

        // **Cálculo de completedAttempts**
        const completedAttempts = await this.quizAttemptRepository.count({
          where: { quiz: { index: quiz.index }, isCompleted: true },
        });

        const incompleteAttempts = totalAttempts - completedAttempts;

        // **Cálculo da média de conclusão (completionRate)**
        const completionRate =
          totalAttempts > 0 ? (completedAttempts / totalAttempts) * 100 : 0;

        // Retornar o objeto com os dados requisitados
        return {
          index: quiz.index,
          title: quiz.title,
          identifier: quiz.identifier,
          completion_rate: parseFloat(completionRate.toFixed(2)),
          total_attempts: completedAttempts + incompleteAttempts,
          owner_name: quiz.owner.fullName,
        } as SimplifiedQuizListDto;
      }),
    );

    return quizDetailsList;
  }

  // Função para calcular as estatísticas do quiz
  async calculateQuizStatistics(quizId: number): Promise<QuizDetailsDto> {
    // Carregar o quiz com as relações necessárias
    const quiz = await this.quizRepository.findOne({
      where: { index: quizId },
      relations: [
        'owner',
        'questions',
        'questions.options',
        'questions.options.sociologicalData',
        'sociologicalData',
      ],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz com ID ${quizId} não encontrado.`);
    }

    // **Correção no cálculo de totalAttempts**
    const totalAttempts = await this.quizAttemptRepository.count({
      where: { quiz: { index: quizId } },
    });

    // **Cálculo de completedAttempts e completionRate**
    const completedAttempts = await this.quizAttemptRepository.count({
      where: { quiz: { index: quizId }, isCompleted: true },
    });

    const completionRate =
      totalAttempts > 0 ? (completedAttempts / totalAttempts) * 100 : 0;

    // **Cálculo de averageCompletionTime**
    const completedAttemptsData = await this.quizAttemptRepository.find({
      where: { quiz: { index: quizId }, isCompleted: true },
      select: ['attemptedAt', 'completedAt'],
    });

    let totalCompletionTime = 0;
    const numberOfCompletedAttempts = completedAttemptsData.length;

    for (const attempt of completedAttemptsData) {
      if (attempt.attemptedAt && attempt.completedAt) {
        const timeDiff =
          attempt.completedAt.getTime() - attempt.attemptedAt.getTime();
        totalCompletionTime += timeDiff;
      }
    }

    const averageCompletionTime =
      numberOfCompletedAttempts > 0
        ? totalCompletionTime / numberOfCompletedAttempts
        : 0;

    // Obter todas as respostas para o quiz
    const answers = await this.quizQuestionAnswerRepository.find({
      where: { question: { quiz: { index: quizId } } },
      relations: ['option', 'option.sociologicalData'],
    });

    // Inicializar variáveis para cálculos
    let totalWeight = 0;
    let totalResponses = 0;

    // Mapa para armazenar os dados sociológicos e seus valores
    const sociologicalDataMap = new Map<
      number,
      QuizStatisticalSociologicalDataDto
    >();

    for (const answer of answers) {
      if (answer.option) {
        totalWeight += answer.option.weight;
        totalResponses++;

        // Dados sociológicos associados à opção
        const sociologicalData = answer.option.sociologicalData;

        if (sociologicalData) {
          let dataDto = sociologicalDataMap.get(sociologicalData.index);
          if (!dataDto) {
            dataDto = {
              id: sociologicalData.index,
              name: sociologicalData.name,
              color: sociologicalData.color,
              value: 0,
            };
            sociologicalDataMap.set(sociologicalData.index, dataDto);
          }
          dataDto.value += answer.option.weight;
        }
      }
    }

    const averageWeight = totalResponses > 0 ? totalWeight / totalResponses : 0;

    const sociologicalDataStatistics = Array.from(sociologicalDataMap.values());

    // Mapear as perguntas para QuizQuestionDto
    const questions: QuizQuestionDto[] = quiz.questions.map((question) => {
      const options: QuizQuestionOptionDto[] = question.options.map(
        (option) => {
          const sociologicalData: QuizSociologicalDataDto =
            option.sociologicalData
              ? {
                  id: option.sociologicalData.index,
                  name: option.sociologicalData.name,
                  color: option.sociologicalData.color,
                }
              : null;

          return {
            id: option.index,
            title: option.title,
            isChecked: option.isChecked,
            weight: option.weight,
            sociologicalData,
          } as QuizQuestionOptionDto;
        },
      );

      return {
        id: question.index,
        type: question.type,
        question: question.question,
        answer: question.answer,
        image: question.image,
        audio: question.audio,
        options,
      } as QuizQuestionDto;
    });

    const userDetails = {
      id: quiz.owner.index,
      email: quiz.owner.email,
      username: quiz.owner.username,
      fullName: quiz.owner.fullName,
    } as QuizUserDetailsDto;

    // Montar o objeto QuizDetailsDto
    const quizDetails: QuizDetailsDto = {
      id: quiz.index,
      title: quiz.title,
      identifier: quiz.identifier,
      description: quiz.description,
      category: quiz.category,
      image: quiz.image,
      audio: quiz.audio,
      sociologicalDataStatistics,
      totalAttempts,
      averageWeight,
      completionRate,
      averageCompletionTime,
      questions,
      owner: userDetails,
    };

    return quizDetails;
  }

  async getAllQuizzesDetails(): Promise<QuizDetailsDto[]> {
    // Carregar todos os quizzes com as relações necessárias
    const quizzes = await this.quizRepository.find({
      relations: [
        'owner',
        'questions',
        'questions.options',
        'questions.options.sociologicalData',
        'sociologicalData',
      ],
    });

    if (!quizzes || quizzes.length === 0) {
      throw new NotFoundException('Nenhum quiz encontrado.');
    }

    // Lista para armazenar os detalhes de todos os quizzes
    const quizzesDetails: QuizDetailsDto[] = [];

    for (const quiz of quizzes) {
      // **Cálculo de totalAttempts**
      const totalAttempts = await this.quizAttemptRepository.count({
        where: { quiz: { index: quiz.index } },
      });

      // **Cálculo de completedAttempts e completionRate**
      const completedAttempts = await this.quizAttemptRepository.count({
        where: { quiz: { index: quiz.index }, isCompleted: true },
      });

      const completionRate =
        totalAttempts > 0 ? (completedAttempts / totalAttempts) * 100 : 0;

      // **Cálculo de averageCompletionTime**
      const completedAttemptsData = await this.quizAttemptRepository.find({
        where: { quiz: { index: quiz.index }, isCompleted: true },
        select: ['attemptedAt', 'completedAt'],
      });

      let totalCompletionTime = 0;
      const numberOfCompletedAttempts = completedAttemptsData.length;

      for (const attempt of completedAttemptsData) {
        if (attempt.attemptedAt && attempt.completedAt) {
          const timeDiff =
            attempt.completedAt.getTime() - attempt.attemptedAt.getTime();
          totalCompletionTime += timeDiff;
        }
      }

      const averageCompletionTime =
        numberOfCompletedAttempts > 0
          ? totalCompletionTime / numberOfCompletedAttempts
          : 0;

      // Obter todas as respostas para o quiz
      const answers = await this.quizQuestionAnswerRepository.find({
        where: { question: { quiz: { index: quiz.index } } },
        relations: ['option', 'option.sociologicalData'],
      });

      // Inicializar variáveis para cálculos
      let totalWeight = 0;
      let totalResponses = 0;

      // Mapa para armazenar os dados sociológicos e seus valores
      const sociologicalDataMap = new Map<
        number,
        QuizStatisticalSociologicalDataDto
      >();

      for (const answer of answers) {
        if (answer.option) {
          totalWeight += answer.option.weight;
          totalResponses++;

          // Dados sociológicos associados à opção
          const sociologicalData = answer.option.sociologicalData;

          if (sociologicalData) {
            let dataDto = sociologicalDataMap.get(sociologicalData.index);
            if (!dataDto) {
              dataDto = {
                id: sociologicalData.index,
                name: sociologicalData.name,
                color: sociologicalData.color,
                value: 0,
              };
              sociologicalDataMap.set(sociologicalData.index, dataDto);
            }
            dataDto.value += answer.option.weight;
          }
        }
      }

      const averageWeight =
        totalResponses > 0 ? totalWeight / totalResponses : 0;

      const sociologicalDataStatistics = Array.from(
        sociologicalDataMap.values(),
      );

      // Mapear as perguntas para QuizQuestionDto
      const questions: QuizQuestionDto[] = quiz.questions.map((question) => {
        const options: QuizQuestionOptionDto[] = question.options.map(
          (option) => {
            const sociologicalData: QuizSociologicalDataDto =
              option.sociologicalData
                ? {
                    id: option.sociologicalData.index,
                    name: option.sociologicalData.name,
                    color: option.sociologicalData.color,
                  }
                : null;

            return {
              id: option.index,
              title: option.title,
              isChecked: option.isChecked,
              weight: option.weight,
              sociologicalData,
            } as QuizQuestionOptionDto;
          },
        );

        return {
          id: question.index,
          type: question.type,
          question: question.question,
          answer: question.answer,
          image: question.image,
          audio: question.audio,
          options,
        } as QuizQuestionDto;
      });

      // Obter detalhes do proprietário
      const userDetails = {
        id: quiz.owner.index,
        email: quiz.owner.email,
        username: quiz.owner.username,
        fullName: quiz.owner.fullName,
      } as QuizUserDetailsDto;

      // Montar o objeto QuizDetailsDto
      const quizDetails: QuizDetailsDto = {
        id: quiz.index,
        title: quiz.title,
        identifier: quiz.identifier,
        description: quiz.description,
        category: quiz.category,
        image: quiz.image,
        audio: quiz.audio,
        sociologicalDataStatistics,
        totalAttempts,
        averageWeight,
        completionRate,
        averageCompletionTime,
        questions,
        owner: userDetails,
      };

      quizzesDetails.push(quizDetails);
    }

    return quizzesDetails;
  }
}
