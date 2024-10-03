import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
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

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(QuizAttempt)
    private readonly quizAttemptRepository: Repository<QuizAttempt>,
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
        'sociologicalData' /*, 'owner'*/,
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

    const [data, total] = await this.quizRepository.findAndCount(findOptions);
    return { data, total };
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

  async recordAttempt(
    userId: string | null,
    email: string | null,
    quizId: number,
    answers: any,
  ): Promise<QuizAttempt> {
    let user: User | null = null;
    if (userId) {
      user = await this.userRepository.findOne({ where: { index: userId } });
    }

    if (!user && !email) {
      throw new BadRequestException('Either userId or email must be provided');
    }

    const quiz = await this.quizRepository.findOne({
      where: { index: quizId },
      relations: ['questions', 'questions.options'],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${quizId} not found`);
    }

    const score = this.calculateScore(quiz, answers);

    const attempt = this.quizAttemptRepository.create({
      user,
      email,
      quiz,
      answers,
      score,
    });

    return this.quizAttemptRepository.save(attempt);
  }

  private calculateScore(quiz: Quiz, answers: any): number {
    let score = 0;

    for (const question of quiz.questions) {
      const userAnswer = answers[question.index];
      if (question.answer && question.answer === userAnswer) {
        score += 1; // Assign points as needed
      }
    }

    return score;
  }

  async findLatestQuiz(): Promise<Quiz> {
    const quiz = await this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.sociologicalData', 'quizSociologicalData')
      .leftJoinAndSelect('quiz.questions', 'questions')
      .leftJoinAndSelect('questions.options', 'options')
      .leftJoinAndSelect('options.sociologicalData', 'optionSociologicalData')
      .orderBy('quiz.createdAt', 'DESC')
      .take(1)
      .getOne();

    if (!quiz) {
      throw new NotFoundException('No quizzes found');
    }
    //console.log(plainToClass(DetailedQuizResponseDto, quiz));
    //return plainToClass(DetailedQuizResponseDto, quiz);
    return quiz;
  }
}
