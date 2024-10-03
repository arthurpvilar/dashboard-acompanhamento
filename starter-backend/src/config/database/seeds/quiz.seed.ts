import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';

export class QuizSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Quiz);
    await repository.insert([
      {
        index: 1,
        title: 'Transtorno do Déficit de Atenção e Hiperatividade',
        identifier: 'TDAH0127',
        type: 'Pergunta e Resposta Dissertativa',
        description:
          '<p style="text-align: justify">Este questionário foi desenvolvido para ajudar a identificar possíveis sinais de Transtorno do Déficit de Atenção com Hiperatividade (TDAH). Ele contém perguntas sobre comportamentos do dia a dia, como a capacidade de concentração, organização e controle de impulsos. As respostas são simples e incluem opções que descrevem diferentes níveis de dificuldade. É importante responder com sinceridade, pensando em como você ou a criança normalmente se comporta. O questionário não substitui uma avaliação médica, mas pode fornecer uma visão inicial sobre questões que merecem atenção.</p>',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null,
        },
        audio: null,
        sociologicalData: [
          {
            index: 1,
            name: 'Comportamento Padrão',
            color: '#0D9394',
          },
          {
            index: 2,
            name: 'TDAH',
            color: '#FFAB1D',
          },
        ],
        questions: [
          {
            index: 1,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Você tem dificuldades em manter o foco em uma única tarefa por um longo período de tempo, especialmente quando a tarefa é entediante ou repetitiva?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Sou muito eficiente em manter minha atenção, mesmo em tarefas que considero desinteressantes.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, perco o foco, mas consigo me concentrar novamente sem grandes problemas.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Tenho dificuldade em focar, especialmente em tarefas repetitivas ou longas, e frequentemente começo a me distrair.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Sinto grande dificuldade em manter o foco em tarefas longas e rapidamente me distraio com outras coisas.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 2,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Com que frequência você começa várias tarefas ao mesmo tempo, mas tem dificuldades em terminá-las porque perde o interesse rapidamente?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Costumo terminar todas as tarefas que começo, independentemente de quantas sejam.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes começo várias coisas, mas geralmente consigo terminar a maioria delas.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Muitas vezes, inicio várias atividades, mas perco o interesse e deixo muitas inacabadas.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Sempre começo muitas tarefas ao mesmo tempo, mas tenho extrema dificuldade em finalizá-las, já que perco o interesse muito rápido.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 3,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Quando você está em situações que exigem concentração, como em uma reunião ou assistindo a uma aula, você se pega pensando em outras coisas ou se distraindo com o ambiente ao redor?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Sou muito focado(a) e raramente me distraio em reuniões ou aulas.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes minha mente vagueia, mas consigo voltar a focar rapidamente.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Minha mente frequentemente se distrai, e tenho dificuldade em prestar atenção em situações prolongadas.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Tenho muita dificuldade em manter a concentração, e acabo prestando mais atenção em coisas ao redor do que na reunião ou aula em si.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 4,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Você sente uma necessidade constante de se mover, mesmo quando a situação exige que você permaneça parado(a), como em uma fila ou sentado(a) em uma sala de espera?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Sou capaz de permanecer parado(a) tranquilamente sem sentir a necessidade de me mover.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, sinto uma leve inquietação, mas consigo me controlar bem.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Tenho dificuldade em ficar parado(a) por muito tempo e sinto a necessidade de me mexer ou movimentar as pernas.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Ficar parado(a) me deixa extremamente inquieto(a), e sinto que preciso constantemente me movimentar ou me levantar.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 5,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p>Com que frequência você se sente sobrecarregado(a) ao tentar organizar suas tarefas, especialmente quando há várias coisas para fazer ao mesmo tempo?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Sou muito organizado(a) e raramente me sinto sobrecarregado(a) com várias tarefas.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, me sinto um pouco sobrecarregado(a), mas consigo organizar tudo sem muitos problemas.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Muitas vezes, sinto que tenho muita coisa para fazer ao mesmo tempo e tenho dificuldade em organizar minhas prioridades.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Sempre me sinto sobrecarregado(a) ao tentar organizar várias tarefas, e geralmente acabo procrastinando ou deixando tarefas pela metade.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 6,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Quando você está ouvindo alguém falar por um longo período, como em uma palestra ou reunião, você tem dificuldades em manter sua atenção e acaba se distraindo com pensamentos ou estímulos externos?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Consigo manter minha atenção o tempo todo, mesmo em palestras ou reuniões longas.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, minha atenção se desvia, mas consigo me focar de novo rapidamente.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Tenho dificuldades em manter minha atenção e frequentemente perco partes importantes do que está sendo dito</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> É extremamente difícil para mim manter o foco em palestras ou reuniões, e frequentemente me perco em pensamentos ou distrações.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 7,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Você frequentemente age de maneira impulsiva, sem pensar nas consequências, como interromper os outros enquanto falam ou tomar decisões apressadas?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Sempre penso nas consequências antes de agir e raramente interrompo os outros.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, sou um pouco impulsivo(a), mas geralmente consigo me controlar.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Ajo impulsivamente com frequência e acabo tomando decisões precipitadas ou interrompendo as pessoas.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Sou extremamente impulsivo(a) e raramente consigo pensar nas consequências antes de agir, o que frequentemente causa problemas.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 8,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Você tem dificuldade em lembrar de detalhes importantes ou cumprir prazos, mesmo que as tarefas não sejam difíceis?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Costumo lembrar de tudo que é importante e sempre cumpro meus prazos.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, esqueço um ou outro detalhe, mas geralmente cumpro meus prazos.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Tenho dificuldade em lembrar de coisas importantes e frequentemente perco prazos.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Sempre esqueço detalhes importantes e frequentemente não consigo cumprir prazos, mesmo em tarefas simples.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 9,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Com que frequência você se distrai com atividades paralelas, como checar o celular ou conversar com alguém, enquanto está realizando uma tarefa importante?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Quando estou realizando uma tarefa importante, raramente me distraio com atividades paralelas.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, dou uma olhada no celular ou converso, mas não me distraio por muito tempo.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Me distraio frequentemente com outras atividades, o que atrapalha minha produtividade.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> É muito difícil me manter focado(a) em uma tarefa sem me distrair constantemente com outras atividades, como mexer no celular.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 10,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Você tem dificuldades em seguir instruções ou terminar tarefas que exigem uma sequência específica de etapas?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Costumo seguir instruções e concluir tarefas com etapas específicas sem problemas.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, tenho dificuldade em seguir as etapas corretamente, mas consigo terminar as tarefas.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Tenho dificuldade em seguir instruções e frequentemente perco o fio das etapas.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> É muito difícil para mim seguir uma sequência de etapas, e acabo me perdendo ou deixando tarefas inacabadas.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 11,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Você sente que precisa realizar várias coisas ao mesmo tempo porque é difícil focar em apenas uma atividade?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Consigo focar em uma única atividade até terminá-la antes de passar para a próxima.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, faço várias coisas ao mesmo tempo, mas isso não atrapalha muito meu foco.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Tenho a necessidade de realizar várias tarefas ao mesmo tempo, mas isso frequentemente afeta minha produtividade.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Sempre sinto que preciso estar fazendo várias coisas ao mesmo tempo, o que dificulta muito meu foco e conclusão das atividades.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 12,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Você tende a procrastinar tarefas que exigem muito esforço mental ou organização, adiando-as para o último minuto?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Costumo começar tarefas complexas imediatamente e as concluo no prazo.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, adio tarefas difíceis, mas não deixo para o último minuto.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Procrastino tarefas exigentes e frequentemente as deixo para a última hora.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Tenho extrema dificuldade em começar tarefas que exigem muito esforço mental, e acabo sempre as adiando até o último minuto.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 13,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Com que frequência você perde coisas importantes, como chaves, carteira ou documentos, mesmo quando tenta ser organizado(a)?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Sou muito organizado(a) e raramente perco objetos importantes.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, perco coisas, mas consigo encontrar sem grandes problemas.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Perco coisas importantes com frequência, mesmo quando tento ser organizado(a).</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Estou sempre perdendo objetos importantes e isso acontece mesmo quando tento manter tudo organizado.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 14,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p style="text-align: justify">Você se sente facilmente frustrado(a) ou impaciente quando precisa esperar por algo, como em filas ou no trânsito?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Sou muito paciente e raramente me sinto frustrado(a) em situações de espera.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, fico um pouco impaciente, mas consigo me controlar bem.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Frequentemente.</strong> Fico frustrado(a) facilmente e me impaciento em filas ou no trânsito.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Tenho extrema dificuldade em esperar, e fico muito impaciente ou frustrado(a) em situações de espera.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
          {
            index: 15,
            type: 'Pergunta e Resposta Dissertativa',
            question:
              '<p>Com que frequência você fala ou age sem pensar, e depois se arrepende das palavras ou ações?</p>',
            options: [
              {
                title:
                  '<p><strong>Nunca.</strong> Costumo pensar bem antes de falar ou agir e raramente me arrependo depois.</p>',
                isChecked: true,
                weight: 1,
                sociologicalData: {
                  index: 1,
                  name: 'Comportamento Padrão',
                },
              },
              {
                title:
                  '<p><strong>Raramente.</strong> Às vezes, falo ou ajo impulsivamente, mas geralmente não me arrependo.</p>',
                isChecked: false,
                weight: 1,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p style="text-align: justify"><strong>Frequentemente.</strong> Falo ou ajo sem pensar, e muitas vezes me arrependo do que disse ou fiz.</p>',
                isChecked: false,
                weight: 3,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
              {
                title:
                  '<p><strong>Quase sempre.</strong> Sou extremamente impulsivo(a) e quase sempre me arrependo de minhas palavras ou ações depois de agir sem pensar.</p>',
                isChecked: false,
                weight: 5,
                sociologicalData: {
                  index: 2,
                  name: 'TDAH',
                },
              },
            ],
            answer: '',
            image: {
              imageFile: null,
              imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
              blobData: null,
            },
            audio: null,
          },
        ],
        status: 'published',
      },
    ]);
  }
}
