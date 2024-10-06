// Type Imports
import type { Quiz, QuizDetailsDto } from '@/types/apps/quizTypes'

export const dbDetailed: QuizDetailsDto[] = [
  {
    id: 1,
    title: 'Transtorno do Déficit de Atenção e Hiperatividade',
    identifier: 'TDAH0127',
    category: 'Start Lab',
    description:
      '<p style="text-align: justify">Este questionário foi desenvolvido para ajudar a identificar possíveis sinais de Transtorno do Déficit de Atenção com Hiperatividade (TDAH). Ele contém perguntas sobre comportamentos do dia a dia, como a capacidade de concentração, organização e controle de impulsos. As respostas são simples e incluem opções que descrevem diferentes níveis de dificuldade. É importante responder com sinceridade, pensando em como você ou a criança normalmente se comporta. O questionário não substitui uma avaliação médica, mas pode fornecer uma visão inicial sobre questões que merecem atenção.</p>',
    image: {
      imageFile: null,
      imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
      blobData: null
    },
    audio: undefined,
    sociologicalDataStatistics: [
      {
        id: 1,
        name: 'Comportamento Padrão',
        value: 50,
        color: '#0D9394'
      },
      {
        id: 2,
        name: 'TDAH',
        value: 77,
        color: '#FFAB1D'
      }
    ],
    totalAttempts: 200,
    averageWeight: 2.8,
    completionRate: 92.5,
    averageCompletionTime: 18,
    questions: [
      {
        id: 1,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você tem dificuldades em manter o foco em uma única tarefa por um longo período de tempo, especialmente quando a tarefa é entediante ou repetitiva?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 1,
            title:
              '<p><strong>Nunca.</strong> Sou muito eficiente em manter minha atenção, mesmo em tarefas que considero desinteressantes.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 2,
            title:
              '<p><strong>Raramente.</strong> Às vezes, perco o foco, mas consigo me concentrar novamente sem grandes problemas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 3,
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldade em focar, especialmente em tarefas repetitivas ou longas, e frequentemente começo a me distrair.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 4,
            title:
              '<p><strong>Quase sempre.</strong> Sinto grande dificuldade em manter o foco em tarefas longas e rapidamente me distraio com outras coisas.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 2,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você começa várias tarefas ao mesmo tempo, mas tem dificuldades em terminá-las porque perde o interesse rapidamente?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 5,
            title:
              '<p><strong>Nunca.</strong> Costumo terminar todas as tarefas que começo, independentemente de quantas sejam.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 6,
            title:
              '<p><strong>Raramente.</strong> Às vezes começo várias coisas, mas geralmente consigo terminar a maioria delas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 7,
            title:
              '<p><strong>Frequentemente.</strong> Muitas vezes, inicio várias atividades, mas perco o interesse e deixo muitas inacabadas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 8,
            title:
              '<p><strong>Quase sempre.</strong> Sempre começo muitas tarefas ao mesmo tempo, mas tenho extrema dificuldade em finalizá-las, já que perco o interesse muito rápido.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 3,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Quando você está em situações que exigem concentração, como em uma reunião ou assistindo a uma aula, você se pega pensando em outras coisas ou se distraindo com o ambiente ao redor?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 9,
            title: '<p><strong>Nunca.</strong> Sou muito focado(a) e raramente me distraio em reuniões ou aulas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 10,
            title:
              '<p><strong>Raramente.</strong> Às vezes minha mente vagueia, mas consigo voltar a focar rapidamente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 11,
            title:
              '<p><strong>Frequentemente.</strong> Minha mente frequentemente se distrai, e tenho dificuldade em prestar atenção em situações prolongadas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 12,
            title:
              '<p><strong>Quase sempre.</strong> Tenho muita dificuldade em manter a concentração, e acabo prestando mais atenção em coisas ao redor do que na reunião ou aula em si.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 4,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você sente uma necessidade constante de se mover, mesmo quando a situação exige que você permaneça parado(a), como em uma fila ou sentado(a) em uma sala de espera?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 13,
            title:
              '<p><strong>Nunca.</strong> Sou capaz de permanecer parado(a) tranquilamente sem sentir a necessidade de me mover.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 14,
            title:
              '<p><strong>Raramente.</strong> Às vezes, sinto uma leve inquietação, mas consigo me controlar bem.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 15,
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldade em ficar parado(a) por muito tempo e sinto a necessidade de me mexer ou movimentar as pernas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 16,
            title:
              '<p><strong>Quase sempre.</strong> Ficar parado(a) me deixa extremamente inquieto(a), e sinto que preciso constantemente me movimentar ou me levantar.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 5,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p>Com que frequência você se sente sobrecarregado(a) ao tentar organizar suas tarefas, especialmente quando há várias coisas para fazer ao mesmo tempo?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 17,
            title:
              '<p><strong>Nunca.</strong> Sou muito organizado(a) e raramente me sinto sobrecarregado(a) com várias tarefas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 18,
            title:
              '<p><strong>Raramente.</strong> Às vezes, me sinto um pouco sobrecarregado(a), mas consigo organizar tudo sem muitos problemas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 19,
            title:
              '<p><strong>Frequentemente.</strong> Muitas vezes, sinto que tenho muita coisa para fazer ao mesmo tempo e tenho dificuldade em organizar minhas prioridades.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 20,
            title:
              '<p><strong>Quase sempre.</strong> Sempre me sinto sobrecarregado(a) ao tentar organizar várias tarefas, e geralmente acabo procrastinando ou deixando tarefas pela metade.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 6,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Quando você está ouvindo alguém falar por um longo período, como em uma palestra ou reunião, você tem dificuldades em manter sua atenção e acaba se distraindo com pensamentos ou estímulos externos?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 21,
            title:
              '<p><strong>Nunca.</strong> Consigo manter minha atenção o tempo todo, mesmo em palestras ou reuniões longas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 22,
            title:
              '<p><strong>Raramente.</strong> Às vezes, minha atenção se desvia, mas consigo me focar de novo rapidamente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 23,
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldades em manter minha atenção e frequentemente perco partes importantes do que está sendo dito</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 24,
            title:
              '<p><strong>Quase sempre.</strong> É extremamente difícil para mim manter o foco em palestras ou reuniões, e frequentemente me perco em pensamentos ou distrações.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 7,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você frequentemente age de maneira impulsiva, sem pensar nas consequências, como interromper os outros enquanto falam ou tomar decisões apressadas?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 25,
            title:
              '<p><strong>Nunca.</strong> Sempre penso nas consequências antes de agir e raramente interrompo os outros.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 26,
            title:
              '<p><strong>Raramente.</strong> Às vezes, sou um pouco impulsivo(a), mas geralmente consigo me controlar.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 27,
            title:
              '<p><strong>Frequentemente.</strong> Ajo impulsivamente com frequência e acabo tomando decisões precipitadas ou interrompendo as pessoas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 28,
            title:
              '<p><strong>Quase sempre.</strong> Sou extremamente impulsivo(a) e raramente consigo pensar nas consequências antes de agir, o que frequentemente causa problemas.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 8,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você tem dificuldade em lembrar de detalhes importantes ou cumprir prazos, mesmo que as tarefas não sejam difíceis?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 29,
            title:
              '<p><strong>Nunca.</strong> Costumo lembrar de tudo que é importante e sempre cumpro meus prazos.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 30,
            title:
              '<p><strong>Raramente.</strong> Às vezes, esqueço um ou outro detalhe, mas geralmente cumpro meus prazos.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 31,
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldade em lembrar de coisas importantes e frequentemente perco prazos.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 32,
            title:
              '<p><strong>Quase sempre.</strong> Sempre esqueço detalhes importantes e frequentemente não consigo cumprir prazos, mesmo em tarefas simples.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 9,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você se distrai com atividades paralelas, como checar o celular ou conversar com alguém, enquanto está realizando uma tarefa importante?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 33,
            title:
              '<p><strong>Nunca.</strong> Quando estou realizando uma tarefa importante, raramente me distraio com atividades paralelas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 34,
            title:
              '<p><strong>Raramente.</strong> Às vezes, dou uma olhada no celular ou converso, mas não me distraio por muito tempo.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 35,
            title:
              '<p><strong>Frequentemente.</strong> Me distraio frequentemente com outras atividades, o que atrapalha minha produtividade.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 36,
            title:
              '<p><strong>Quase sempre.</strong> É muito difícil me manter focado(a) em uma tarefa sem me distrair constantemente com outras atividades, como mexer no celular.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 10,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você tem dificuldades em seguir instruções ou terminar tarefas que exigem uma sequência específica de etapas?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 37,
            title:
              '<p><strong>Nunca.</strong> Costumo seguir instruções e concluir tarefas com etapas específicas sem problemas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 38,
            title:
              '<p><strong>Raramente.</strong> Às vezes, tenho dificuldade em seguir as etapas corretamente, mas consigo terminar as tarefas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 39,
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldade em seguir instruções e frequentemente perco o fio das etapas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 40,
            title:
              '<p><strong>Quase sempre.</strong> É muito difícil para mim seguir uma sequência de etapas, e acabo me perdendo ou deixando tarefas inacabadas.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 11,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você sente que precisa realizar várias coisas ao mesmo tempo porque é difícil focar em apenas uma atividade?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 41,
            title:
              '<p><strong>Nunca.</strong> Consigo focar em uma única atividade até terminá-la antes de passar para a próxima.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 42,
            title:
              '<p><strong>Raramente.</strong> Às vezes, faço várias coisas ao mesmo tempo, mas isso não atrapalha muito meu foco.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 43,
            title:
              '<p><strong>Frequentemente.</strong> Tenho a necessidade de realizar várias tarefas ao mesmo tempo, mas isso frequentemente afeta minha produtividade.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 44,
            title:
              '<p><strong>Quase sempre.</strong> Sempre sinto que preciso estar fazendo várias coisas ao mesmo tempo, o que dificulta muito meu foco e conclusão das atividades.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 12,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você tende a procrastinar tarefas que exigem muito esforço mental ou organização, adiando-as para o último minuto?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 45,
            title:
              '<p><strong>Nunca.</strong> Costumo começar tarefas complexas imediatamente e as concluo no prazo.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 46,
            title:
              '<p><strong>Raramente.</strong> Às vezes, adio tarefas difíceis, mas não deixo para o último minuto.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 47,
            title:
              '<p><strong>Frequentemente.</strong> Procrastino tarefas exigentes e frequentemente as deixo para a última hora.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 48,
            title:
              '<p><strong>Quase sempre.</strong> Tenho extrema dificuldade em começar tarefas que exigem muito esforço mental, e acabo sempre as adiando até o último minuto.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 13,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você perde coisas importantes, como chaves, carteira ou documentos, mesmo quando tenta ser organizado(a)?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 49,
            title: '<p><strong>Nunca.</strong> Sou muito organizado(a) e raramente perco objetos importantes.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 50,
            title:
              '<p><strong>Raramente.</strong> Às vezes, perco coisas, mas consigo encontrar sem grandes problemas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 51,
            title:
              '<p><strong>Frequentemente.</strong> Perco coisas importantes com frequência, mesmo quando tento ser organizado(a).</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 52,
            title:
              '<p><strong>Quase sempre.</strong> Estou sempre perdendo objetos importantes e isso acontece mesmo quando tento manter tudo organizado.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 14,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você se sente facilmente frustrado(a) ou impaciente quando precisa esperar por algo, como em filas ou no trânsito?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 53,
            title:
              '<p><strong>Nunca.</strong> Sou muito paciente e raramente me sinto frustrado(a) em situações de espera.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 54,
            title:
              '<p><strong>Raramente.</strong> Às vezes, fico um pouco impaciente, mas consigo me controlar bem.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 55,
            title:
              '<p><strong>Frequentemente.</strong> Fico frustrado(a) facilmente e me impaciento em filas ou no trânsito.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 56,
            title:
              '<p><strong>Quase sempre.</strong> Tenho extrema dificuldade em esperar, e fico muito impaciente ou frustrado(a) em situações de espera.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 15,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Com que frequência você fala ou age sem pensar, e depois se arrepende das palavras ou ações?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 57,
            title:
              '<p><strong>Nunca.</strong> Costumo pensar bem antes de falar ou agir e raramente me arrependo depois.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 58,
            title:
              '<p><strong>Raramente.</strong> Às vezes, falo ou ajo impulsivamente, mas geralmente não me arrependo.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 59,
            title:
              '<p style="text-align: justify"><strong>Frequentemente.</strong> Falo ou ajo sem pensar, e muitas vezes me arrependo do que disse ou fiz.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          },
          {
            id: 60,
            title:
              '<p><strong>Quase sempre.</strong> Sou extremamente impulsivo(a) e quase sempre me arrependo de minhas palavras ou ações depois de agir sem pensar.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'TDAH',
              color: '#FFAB1D'
            }
          }
        ]
      }
    ],
    owner: {
      index: '80759d4e-39eb-4c5a-aaf9-a030094092fc',
      email: 'arthurpvilar@gmail.com',
      username: 'arthurpvilar',
      fullName: 'Arthur Padilha Vilar Salvador'
    }
  },
  {
    id: 2,
    title: 'Imprudência no Trânsito',
    identifier: 'IT0105',
    category: 'Escola do Volante',
    description:
      '<p style="text-align: justify">Este questionário foi desenvolvido para ajudar a identificar possíveis sinais de imprudência no trânsito. Ele aborda comportamentos cotidianos relacionados à atenção, organização e controle em situações de direção. As perguntas são simples, com respostas que descrevem diferentes níveis de habilidade. É importante responder com sinceridade, considerando como você ou alguém se comporta normalmente ao volante. O questionário oferece uma análise inicial sobre aspectos que podem influenciar a segurança no trânsito, destacando áreas que podem exigir maior cuidado.</p>',
    image: {
      imageFile: null,
      imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
      blobData: null
    },
    audio: undefined,
    sociologicalDataStatistics: [
      {
        id: 1,
        name: 'Comportamento Padrão',
        value: 50,
        color: '#0D9394'
      },
      {
        id: 2,
        name: 'Imprudência no Trânsito',
        value: 70,
        color: '#FFAB1D'
      }
    ],
    totalAttempts: 150,
    averageWeight: 3.2,
    completionRate: 88,
    averageCompletionTime: 15,
    questions: [
      {
        id: 1,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você se distrai ao dirigir, como ao usar o celular, ajustar o rádio ou conversar com passageiros?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 1,
            title:
              '<p><strong>Nunca.</strong> Eu sempre mantenho minha atenção total na direção, independentemente das circunstâncias.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 2,
            title:
              '<p><strong>Raramente.</strong> Às vezes, me distraio com o ambiente, mas consigo voltar a focar rapidamente.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 3,
            title:
              '<p><strong>Frequentemente.</strong> Muitas vezes, perco o foco enquanto dirijo, especialmente com dispositivos ou conversas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 4,
            title:
              '<p><strong>Quase sempre.</strong> Tenho grande dificuldade em manter minha atenção no trânsito, me distraio facilmente com o que acontece ao redor.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 2,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você ultrapassa o limite de velocidade, especialmente em áreas com maior fluxo de pedestres ou ciclistas?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 5,
            title: '<p><strong>Nunca.</strong> Eu sempre respeito os limites de velocidade em todas as condições.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 6,
            title:
              '<p><strong>Raramente.</strong> Às vezes, ultrapasso o limite, mas geralmente em áreas de baixo risco.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 7,
            title:
              '<p><strong>Frequentemente.</strong> Costumo dirigir acima do limite de velocidade, mesmo em áreas de risco.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 8,
            title:
              '<p><strong>Quase sempre.</strong> Estou sempre acima do limite de velocidade, independentemente da área.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 3,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma mudar de faixa sem sinalizar ou fazer manobras bruscas que podem pegar outros motoristas de surpresa?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 9,
            title:
              '<p><strong>Nunca.</strong> Sempre sinalizo e faço manobras com cuidado, respeitando os outros motoristas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 10,
            title:
              '<p><strong>Raramente.</strong> Às vezes, deixo de sinalizar ou faço uma manobra rápida, mas geralmente em situações seguras.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 11,
            title:
              '<p><strong>Frequentemente.</strong> Costumo mudar de faixa sem sinalizar ou fazer manobras arriscadas com frequência.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 12,
            title:
              '<p><strong>Quase sempre.</strong> Faço manobras bruscas frequentemente, sem me preocupar em sinalizar ou avisar os outros motoristas.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 4,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você fica impaciente no trânsito e se envolve em atitudes agressivas, como acelerar quando o sinal está prestes a fechar ou ultrapassar pela direita?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 13,
            title:
              '<p><strong>Nunca.</strong> Sou muito paciente no trânsito e sigo todas as regras de forma tranquila.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 14,
            title:
              '<p><strong>Raramente.</strong> Às vezes, fico impaciente, mas ainda assim respeito as regras de trânsito.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 15,
            title:
              '<p><strong>Frequentemente.</strong> Fico impaciente frequentemente e, por isso, cometo manobras arriscadas para ganhar tempo.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 16,
            title:
              '<p><strong>Quase sempre.</strong> Minha impaciência no trânsito é constante, e frequentemente assumo atitudes agressivas e perigosas.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 5,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma seguir muito próximo do veículo à frente, reduzindo a distância de segurança, especialmente em situações de tráfego intenso?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 17,
            title: '<p><strong>Nunca.</strong> Sempre mantenho uma distância segura do veículo à frente.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 18,
            title:
              '<p><strong>Raramente.</strong> Às vezes, reduzo a distância em tráfego intenso, mas ainda considero segura.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 19,
            title:
              '<p><strong>Frequentemente.</strong> Costumo seguir muito próximo dos outros veículos em tráfego intenso.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 20,
            title:
              '<p><strong>Quase sempre.</strong> Sempre dirijo muito próximo dos veículos à minha frente, independentemente da situação.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 6,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você tenta ‘cortar’ outros veículos em engarrafamentos ou filas de tráfego, mudando constantemente de faixa?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 21,
            title:
              '<p><strong>Nunca.</strong> Eu mantenho minha faixa e sigo o fluxo do trânsito, sem tentar ultrapassar os outros veículos.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 22,
            title:
              '<p><strong>Raramente.</strong> Às vezes, mudo de faixa para evitar um engarrafamento, mas não com frequência.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 23,
            title:
              '<p><strong>Frequentemente.</strong> Costumo mudar de faixa várias vezes em engarrafamentos para tentar ganhar tempo.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 24,
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente ‘corto’ outros veículos em engarrafamentos, mudando de faixa constantemente.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 7,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma frear bruscamente, especialmente quando está muito próximo de outros veículos ou em situações de alta velocidade?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 25,
            title:
              '<p><strong>Nunca.</strong> Eu sempre freio de forma suave e previsível, respeitando a distância de segurança.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 26,
            title:
              '<p><strong>Raramente.</strong> Às vezes, sou obrigado a frear bruscamente, mas geralmente consigo evitar.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 27,
            title:
              '<p><strong>Frequentemente.</strong> Tenho o hábito de frear bruscamente, especialmente em situações de alta velocidade.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 28,
            title:
              '<p><strong>Quase sempre.</strong> Estou constantemente freando de maneira brusca, independentemente da situação.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 8,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você dirige após ter consumido álcool ou outros substâncias que possam comprometer seu estado de alerta?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 29,
            title:
              '<p><strong>Nunca.</strong> Eu nunca dirijo após consumir qualquer substância que possa comprometer meu estado de alerta.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 30,
            title:
              '<p><strong>Raramente.</strong> Às vezes, dirijo após consumir pequenas quantidades de álcool, mas me sinto capaz de dirigir.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 31,
            title:
              '<p><strong>Frequentemente.</strong> Costumo dirigir após consumir álcool ou outras substâncias que afetam meu estado de alerta.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 32,
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente dirijo sob efeito de álcool ou substâncias que comprometem meu estado de alerta.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 9,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma fazer ultrapassagens em locais proibidos ou sem visibilidade adequada, como em curvas ou ladeiras?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 33,
            title:
              '<p><strong>Nunca.</strong> Eu nunca faço ultrapassagens em locais proibidos ou sem visibilidade adequada.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 34,
            title:
              '<p><strong>Raramente.</strong> Às vezes, faço ultrapassagens em locais arriscados, mas apenas quando acho que é seguro.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 35,
            title:
              '<p><strong>Frequentemente.</strong> Costumo fazer ultrapassagens em locais sem boa visibilidade ou em curvas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 36,
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente faço ultrapassagens arriscadas, sem considerar a visibilidade ou os riscos envolvidos.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 10,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você ignora semáforos ou sinais de parada, avançando sem respeitar a sinalização?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 37,
            title:
              '<p><strong>Nunca.</strong> Eu sempre respeito os semáforos e sinais de parada, aguardando minha vez de avançar.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 38,
            title:
              '<p><strong>Raramente.</strong> Às vezes, avanço semáforos amarelos, mas respeito a maioria das sinalizações.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 39,
            title:
              '<p><strong>Frequentemente.</strong> Costumo ignorar semáforos e sinais de parada quando estou com pressa.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 40,
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente avanço semáforos e desrespeito sinais de parada.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 11,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma esquecer de dar seta ao fazer curvas ou mudar de faixa, deixando os outros motoristas sem aviso prévio?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 41,
            title: '<p><strong>Nunca.</strong> Eu sempre dou seta ao mudar de faixa ou fazer curvas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 42,
            title:
              '<p><strong>Raramente.</strong> Às vezes, esqueço de dar seta, mas geralmente aviso com antecedência.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 43,
            title:
              '<p><strong>Frequentemente.</strong> Costumo esquecer de dar seta ao mudar de faixa ou fazer curvas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 44,
            title:
              '<p><strong>Quase sempre.</strong> Eu raramente dou seta ao mudar de faixa ou fazer curvas, o que pode pegar os outros motoristas de surpresa.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 12,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você ignora pedestres em faixas de pedestres ou locais designados, avançando antes que eles terminem de atravessar?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 45,
            title:
              '<p><strong>Nunca.</strong> Eu sempre paro para os pedestres atravessarem nas faixas designadas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 46,
            title:
              '<p><strong>Raramente.</strong> Às vezes, passo por pedestres que ainda estão longe da faixa, mas geralmente respeito os pedestres.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 47,
            title:
              '<p><strong>Frequentemente.</strong> Costumo avançar mesmo quando pedestres estão atravessando na faixa.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 48,
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente avanço em faixas de pedestres, mesmo quando pedestres estão atravessando.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 13,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você faz curvas fechadas em alta velocidade, sem desacelerar adequadamente?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 49,
            title: '<p><strong>Nunca.</strong> Eu sempre desacelero ao fazer curvas, garantindo segurança.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 50,
            title:
              '<p><strong>Raramente.</strong> Às vezes, faço curvas rápidas, mas apenas quando julgo que é seguro.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 51,
            title:
              '<p><strong>Frequentemente.</strong> Costumo fazer curvas em alta velocidade, sem desacelerar adequadamente.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 52,
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente faço curvas em alta velocidade, sem considerar os riscos.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 14,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma dirigir muito rápido em áreas residenciais, ignorando os limites de velocidade reduzidos dessas áreas?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 53,
            title: '<p><strong>Nunca.</strong> Eu sempre respeito os limites de velocidade em áreas residenciais.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 54,
            title:
              '<p><strong>Raramente.</strong> Às vezes, dirijo um pouco mais rápido do que o permitido, mas ainda assim com cautela.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 55,
            title: '<p><strong>Frequentemente.</strong> Costumo dirigir em alta velocidade em áreas residenciais.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 56,
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente dirijo muito rápido em áreas residenciais, ignorando os limites de velocidade.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      },
      {
        id: 15,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você dirige de forma imprudente ao tentar \'competir\' com outros motoristas ou provar algo durante situações de estresse no trânsito?</p>',
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
          blobData: null
        },
        audio: undefined,
        options: [
          {
            id: 57,
            title:
              '<p><strong>Nunca.</strong> Eu nunca tento competir ou provar algo no trânsito, mantenho a calma em todas as situações.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Comportamento Padrão',
              color: '#0D9394'
            }
          },
          {
            id: 58,
            title:
              '<p><strong>Raramente.</strong> Às vezes, me sinto desafiado(a), mas tento evitar competir com outros motoristas.</p>',
            isChecked: false,
            weight: 2,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 59,
            title:
              '<p><strong>Frequentemente.</strong> Costumo competir ou provar algo no trânsito quando me sinto pressionado(a) por outros motoristas.</p>',
            isChecked: false,
            weight: 3,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          },
          {
            id: 60,
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente entro em competições ou situações arriscadas com outros motoristas, especialmente em momentos de estresse.</p>',
            isChecked: false,
            weight: 5,
            sociologicalData: {
              id: 2,
              name: 'Imprudência no Trânsito',
              color: '#FFAB1D'
            }
          }
        ]
      }
    ],
    owner: {
      index: '80759d4e-39eb-4c5a-aaf9-a030094092fc',
      email: 'arthurpvilar@gmail.com',
      username: 'arthurpvilar',
      fullName: 'Arthur Padilha Vilar Salvador'
    }
  }
]

export const db: Quiz[] = [
  {
    id: 1,
    title: 'Transtorno do Déficit de Atenção e Hiperatividade',
    identifier: 'TDAH0127',
    type: 'Pergunta e Resposta Dissertativa',
    category: 'Start Lab',
    description:
      '<p style="text-align: justify">Este questionário foi desenvolvido para ajudar a identificar possíveis sinais de Transtorno do Déficit de Atenção com Hiperatividade (TDAH). Ele contém perguntas sobre comportamentos do dia a dia, como a capacidade de concentração, organização e controle de impulsos. As respostas são simples e incluem opções que descrevem diferentes níveis de dificuldade. É importante responder com sinceridade, pensando em como você ou a criança normalmente se comporta. O questionário não substitui uma avaliação médica, mas pode fornecer uma visão inicial sobre questões que merecem atenção.</p>',
    image: {
      imageFile: null,
      imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
      blobData: null
    },
    audio: null,
    sociologicalData: [
      {
        id: 1,
        name: 'Comportamento Padrão',
        value: 50,
        color: '#0D9394'
      },
      {
        id: 2,
        name: 'TDAH',
        value: 77,
        color: '#FFAB1D'
      }
    ],
    questions: [
      {
        id: 1,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você tem dificuldades em manter o foco em uma única tarefa por um longo período de tempo, especialmente quando a tarefa é entediante ou repetitiva?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Sou muito eficiente em manter minha atenção, mesmo em tarefas que considero desinteressantes.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, perco o foco, mas consigo me concentrar novamente sem grandes problemas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldade em focar, especialmente em tarefas repetitivas ou longas, e frequentemente começo a me distrair.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Sinto grande dificuldade em manter o foco em tarefas longas e rapidamente me distraio com outras coisas.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 2,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você começa várias tarefas ao mesmo tempo, mas tem dificuldades em terminá-las porque perde o interesse rapidamente?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Costumo terminar todas as tarefas que começo, independentemente de quantas sejam.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes começo várias coisas, mas geralmente consigo terminar a maioria delas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Muitas vezes, inicio várias atividades, mas perco o interesse e deixo muitas inacabadas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Sempre começo muitas tarefas ao mesmo tempo, mas tenho extrema dificuldade em finalizá-las, já que perco o interesse muito rápido.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 3,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Quando você está em situações que exigem concentração, como em uma reunião ou assistindo a uma aula, você se pega pensando em outras coisas ou se distraindo com o ambiente ao redor?</p>',
        options: [
          {
            title: '<p><strong>Nunca.</strong> Sou muito focado(a) e raramente me distraio em reuniões ou aulas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes minha mente vagueia, mas consigo voltar a focar rapidamente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Minha mente frequentemente se distrai, e tenho dificuldade em prestar atenção em situações prolongadas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Tenho muita dificuldade em manter a concentração, e acabo prestando mais atenção em coisas ao redor do que na reunião ou aula em si.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 4,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você sente uma necessidade constante de se mover, mesmo quando a situação exige que você permaneça parado(a), como em uma fila ou sentado(a) em uma sala de espera?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Sou capaz de permanecer parado(a) tranquilamente sem sentir a necessidade de me mover.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, sinto uma leve inquietação, mas consigo me controlar bem.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldade em ficar parado(a) por muito tempo e sinto a necessidade de me mexer ou movimentar as pernas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Ficar parado(a) me deixa extremamente inquieto(a), e sinto que preciso constantemente me movimentar ou me levantar.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 5,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p>Com que frequência você se sente sobrecarregado(a) ao tentar organizar suas tarefas, especialmente quando há várias coisas para fazer ao mesmo tempo?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Sou muito organizado(a) e raramente me sinto sobrecarregado(a) com várias tarefas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, me sinto um pouco sobrecarregado(a), mas consigo organizar tudo sem muitos problemas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Muitas vezes, sinto que tenho muita coisa para fazer ao mesmo tempo e tenho dificuldade em organizar minhas prioridades.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Sempre me sinto sobrecarregado(a) ao tentar organizar várias tarefas, e geralmente acabo procrastinando ou deixando tarefas pela metade.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 6,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Quando você está ouvindo alguém falar por um longo período, como em uma palestra ou reunião, você tem dificuldades em manter sua atenção e acaba se distraindo com pensamentos ou estímulos externos?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Consigo manter minha atenção o tempo todo, mesmo em palestras ou reuniões longas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, minha atenção se desvia, mas consigo me focar de novo rapidamente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldades em manter minha atenção e frequentemente perco partes importantes do que está sendo dito</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> É extremamente difícil para mim manter o foco em palestras ou reuniões, e frequentemente me perco em pensamentos ou distrações.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 7,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você frequentemente age de maneira impulsiva, sem pensar nas consequências, como interromper os outros enquanto falam ou tomar decisões apressadas?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Sempre penso nas consequências antes de agir e raramente interrompo os outros.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, sou um pouco impulsivo(a), mas geralmente consigo me controlar.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Ajo impulsivamente com frequência e acabo tomando decisões precipitadas ou interrompendo as pessoas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Sou extremamente impulsivo(a) e raramente consigo pensar nas consequências antes de agir, o que frequentemente causa problemas.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 8,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você tem dificuldade em lembrar de detalhes importantes ou cumprir prazos, mesmo que as tarefas não sejam difíceis?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Costumo lembrar de tudo que é importante e sempre cumpro meus prazos.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, esqueço um ou outro detalhe, mas geralmente cumpro meus prazos.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldade em lembrar de coisas importantes e frequentemente perco prazos.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Sempre esqueço detalhes importantes e frequentemente não consigo cumprir prazos, mesmo em tarefas simples.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 9,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você se distrai com atividades paralelas, como checar o celular ou conversar com alguém, enquanto está realizando uma tarefa importante?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Quando estou realizando uma tarefa importante, raramente me distraio com atividades paralelas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, dou uma olhada no celular ou converso, mas não me distraio por muito tempo.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Me distraio frequentemente com outras atividades, o que atrapalha minha produtividade.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> É muito difícil me manter focado(a) em uma tarefa sem me distrair constantemente com outras atividades, como mexer no celular.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 10,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você tem dificuldades em seguir instruções ou terminar tarefas que exigem uma sequência específica de etapas?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Costumo seguir instruções e concluir tarefas com etapas específicas sem problemas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, tenho dificuldade em seguir as etapas corretamente, mas consigo terminar as tarefas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Tenho dificuldade em seguir instruções e frequentemente perco o fio das etapas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> É muito difícil para mim seguir uma sequência de etapas, e acabo me perdendo ou deixando tarefas inacabadas.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 11,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você sente que precisa realizar várias coisas ao mesmo tempo porque é difícil focar em apenas uma atividade?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Consigo focar em uma única atividade até terminá-la antes de passar para a próxima.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, faço várias coisas ao mesmo tempo, mas isso não atrapalha muito meu foco.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Tenho a necessidade de realizar várias tarefas ao mesmo tempo, mas isso frequentemente afeta minha produtividade.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Sempre sinto que preciso estar fazendo várias coisas ao mesmo tempo, o que dificulta muito meu foco e conclusão das atividades.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 12,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você tende a procrastinar tarefas que exigem muito esforço mental ou organização, adiando-as para o último minuto?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Costumo começar tarefas complexas imediatamente e as concluo no prazo.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, adio tarefas difíceis, mas não deixo para o último minuto.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Procrastino tarefas exigentes e frequentemente as deixo para a última hora.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Tenho extrema dificuldade em começar tarefas que exigem muito esforço mental, e acabo sempre as adiando até o último minuto.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 13,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você perde coisas importantes, como chaves, carteira ou documentos, mesmo quando tenta ser organizado(a)?</p>',
        options: [
          {
            title: '<p><strong>Nunca.</strong> Sou muito organizado(a) e raramente perco objetos importantes.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, perco coisas, mas consigo encontrar sem grandes problemas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Perco coisas importantes com frequência, mesmo quando tento ser organizado(a).</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Estou sempre perdendo objetos importantes e isso acontece mesmo quando tento manter tudo organizado.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 14,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você se sente facilmente frustrado(a) ou impaciente quando precisa esperar por algo, como em filas ou no trânsito?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Sou muito paciente e raramente me sinto frustrado(a) em situações de espera.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, fico um pouco impaciente, mas consigo me controlar bem.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Fico frustrado(a) facilmente e me impaciento em filas ou no trânsito.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Tenho extrema dificuldade em esperar, e fico muito impaciente ou frustrado(a) em situações de espera.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 15,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Com que frequência você fala ou age sem pensar, e depois se arrepende das palavras ou ações?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Costumo pensar bem antes de falar ou agir e raramente me arrependo depois.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, falo ou ajo impulsivamente, mas geralmente não me arrependo.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p style="text-align: justify"><strong>Frequentemente.</strong> Falo ou ajo sem pensar, e muitas vezes me arrependo do que disse ou fiz.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Sou extremamente impulsivo(a) e quase sempre me arrependo de minhas palavras ou ações depois de agir sem pensar.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'TDAH'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      }
    ],
    status: 'published',
    owner: {
      index: '80759d4e-39eb-4c5a-aaf9-a030094092fc',
      username: 'arthurpvilar',
      fullName: 'Arthur Padilha Vilar Salvador',
      email: 'arthurpvilar@gmail.com'
    }
  },
  {
    id: 2,
    title: 'Imprudência no Trânsito',
    identifier: 'IT0105',
    type: 'Pergunta e Resposta Dissertativa',
    category: 'Escola do Volante',
    description:
      '<p style="text-align: justify">Este questionário foi desenvolvido para ajudar a identificar possíveis sinais de imprudência no trânsito. Ele aborda comportamentos cotidianos relacionados à atenção, organização e controle em situações de direção. As perguntas são simples, com respostas que descrevem diferentes níveis de habilidade. É importante responder com sinceridade, considerando como você ou alguém se comporta normalmente ao volante. O questionário oferece uma análise inicial sobre aspectos que podem influenciar a segurança no trânsito, destacando áreas que podem exigir maior cuidado.</p>',
    image: {
      imageFile: null,
      imageUrl: 'https://www.senaisolucoes.com.br/xp_images/EDV.png',
      blobData: null
    },
    audio: null,
    sociologicalData: [
      {
        id: 1,
        name: 'Comportamento Padrão',
        value: 50,
        color: '#0D9394'
      },
      {
        id: 2,
        name: 'Imprudência no Trânsito',
        value: 70,
        color: '#FFAB1D'
      }
    ],
    questions: [
      {
        id: 1,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você se distrai ao dirigir, como ao usar o celular, ajustar o rádio ou conversar com passageiros?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Eu sempre mantenho minha atenção total na direção, independentemente das circunstâncias.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, me distraio com o ambiente, mas consigo voltar a focar rapidamente.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Muitas vezes, perco o foco enquanto dirijo, especialmente com dispositivos ou conversas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Tenho grande dificuldade em manter minha atenção no trânsito, me distraio facilmente com o que acontece ao redor.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 2,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você ultrapassa o limite de velocidade, especialmente em áreas com maior fluxo de pedestres ou ciclistas?</p>',
        options: [
          {
            title: '<p><strong>Nunca.</strong> Eu sempre respeito os limites de velocidade em todas as condições.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, ultrapasso o limite, mas geralmente em áreas de baixo risco.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo dirigir acima do limite de velocidade, mesmo em áreas de risco.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Estou sempre acima do limite de velocidade, independentemente da área.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 3,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma mudar de faixa sem sinalizar ou fazer manobras bruscas que podem pegar outros motoristas de surpresa?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Sempre sinalizo e faço manobras com cuidado, respeitando os outros motoristas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, deixo de sinalizar ou faço uma manobra rápida, mas geralmente em situações seguras.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo mudar de faixa sem sinalizar ou fazer manobras arriscadas com frequência.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Faço manobras bruscas frequentemente, sem me preocupar em sinalizar ou avisar os outros motoristas.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 4,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você fica impaciente no trânsito e se envolve em atitudes agressivas, como acelerar quando o sinal está prestes a fechar ou ultrapassar pela direita?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Sou muito paciente no trânsito e sigo todas as regras de forma tranquila.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, fico impaciente, mas ainda assim respeito as regras de trânsito.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Fico impaciente frequentemente e, por isso, cometo manobras arriscadas para ganhar tempo.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Minha impaciência no trânsito é constante, e frequentemente assumo atitudes agressivas e perigosas.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 5,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma seguir muito próximo do veículo à frente, reduzindo a distância de segurança, especialmente em situações de tráfego intenso?</p>',
        options: [
          {
            title: '<p><strong>Nunca.</strong> Sempre mantenho uma distância segura do veículo à frente.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, reduzo a distância em tráfego intenso, mas ainda considero segura.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo seguir muito próximo dos outros veículos em tráfego intenso.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Sempre dirijo muito próximo dos veículos à minha frente, independentemente da situação.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 6,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você tenta ‘cortar’ outros veículos em engarrafamentos ou filas de tráfego, mudando constantemente de faixa?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Eu mantenho minha faixa e sigo o fluxo do trânsito, sem tentar ultrapassar os outros veículos.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, mudo de faixa para evitar um engarrafamento, mas não com frequência.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo mudar de faixa várias vezes em engarrafamentos para tentar ganhar tempo.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente ‘corto’ outros veículos em engarrafamentos, mudando de faixa constantemente.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 7,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma frear bruscamente, especialmente quando está muito próximo de outros veículos ou em situações de alta velocidade?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Eu sempre freio de forma suave e previsível, respeitando a distância de segurança.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, sou obrigado a frear bruscamente, mas geralmente consigo evitar.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Tenho o hábito de frear bruscamente, especialmente em situações de alta velocidade.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Estou constantemente freando de maneira brusca, independentemente da situação.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 8,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você dirige após ter consumido álcool ou outros substâncias que possam comprometer seu estado de alerta?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Eu nunca dirijo após consumir qualquer substância que possa comprometer meu estado de alerta.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, dirijo após consumir pequenas quantidades de álcool, mas me sinto capaz de dirigir.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo dirigir após consumir álcool ou outras substâncias que afetam meu estado de alerta.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente dirijo sob efeito de álcool ou substâncias que comprometem meu estado de alerta.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 9,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma fazer ultrapassagens em locais proibidos ou sem visibilidade adequada, como em curvas ou ladeiras?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Eu nunca faço ultrapassagens em locais proibidos ou sem visibilidade adequada.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, faço ultrapassagens em locais arriscados, mas apenas quando acho que é seguro.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo fazer ultrapassagens em locais sem boa visibilidade ou em curvas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente faço ultrapassagens arriscadas, sem considerar a visibilidade ou os riscos envolvidos.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 10,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você ignora semáforos ou sinais de parada, avançando sem respeitar a sinalização?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Eu sempre respeito os semáforos e sinais de parada, aguardando minha vez de avançar.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, avanço semáforos amarelos, mas respeito a maioria das sinalizações.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo ignorar semáforos e sinais de parada quando estou com pressa.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente avanço semáforos e desrespeito sinais de parada.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 11,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma esquecer de dar seta ao fazer curvas ou mudar de faixa, deixando os outros motoristas sem aviso prévio?</p>',
        options: [
          {
            title: '<p><strong>Nunca.</strong> Eu sempre dou seta ao mudar de faixa ou fazer curvas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, esqueço de dar seta, mas geralmente aviso com antecedência.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo esquecer de dar seta ao mudar de faixa ou fazer curvas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu raramente dou seta ao mudar de faixa ou fazer curvas, o que pode pegar os outros motoristas de surpresa.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 12,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você ignora pedestres em faixas de pedestres ou locais designados, avançando antes que eles terminem de atravessar?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Eu sempre paro para os pedestres atravessarem nas faixas designadas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, passo por pedestres que ainda estão longe da faixa, mas geralmente respeito os pedestres.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo avançar mesmo quando pedestres estão atravessando na faixa.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente avanço em faixas de pedestres, mesmo quando pedestres estão atravessando.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 13,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você faz curvas fechadas em alta velocidade, sem desacelerar adequadamente?</p>',
        options: [
          {
            title: '<p><strong>Nunca.</strong> Eu sempre desacelero ao fazer curvas, garantindo segurança.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, faço curvas rápidas, mas apenas quando julgo que é seguro.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo fazer curvas em alta velocidade, sem desacelerar adequadamente.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente faço curvas em alta velocidade, sem considerar os riscos.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 14,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Você costuma dirigir muito rápido em áreas residenciais, ignorando os limites de velocidade reduzidos dessas áreas?</p>',
        options: [
          {
            title: '<p><strong>Nunca.</strong> Eu sempre respeito os limites de velocidade em áreas residenciais.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, dirijo um pouco mais rápido do que o permitido, mas ainda assim com cautela.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title: '<p><strong>Frequentemente.</strong> Costumo dirigir em alta velocidade em áreas residenciais.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente dirijo muito rápido em áreas residenciais, ignorando os limites de velocidade.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      },
      {
        id: 15,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Com que frequência você dirige de forma imprudente ao tentar \'competir\' com outros motoristas ou provar algo durante situações de estresse no trânsito?</p>',
        options: [
          {
            title:
              '<p><strong>Nunca.</strong> Eu nunca tento competir ou provar algo no trânsito, mantenho a calma em todas as situações.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Comportamento Padrão'
            }
          },
          {
            title:
              '<p><strong>Raramente.</strong> Às vezes, me sinto desafiado(a), mas tento evitar competir com outros motoristas.</p>',
            isChecked: false,
            weight: 2,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Frequentemente.</strong> Costumo competir ou provar algo no trânsito quando me sinto pressionado(a) por outros motoristas.</p>',
            isChecked: false,
            weight: 3,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          },
          {
            title:
              '<p><strong>Quase sempre.</strong> Eu frequentemente entro em competições ou situações arriscadas com outros motoristas, especialmente em momentos de estresse.</p>',
            isChecked: false,
            weight: 5,
            sociological: {
              id: 2,
              name: 'Imprudência no Trânsito'
            }
          }
        ],
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: null
      }
    ],
    status: 'published',
    owner: {
      index: '80759d4e-39eb-4c5a-aaf9-a030094092fc',
      username: 'arthurpvilar',
      fullName: 'Arthur Padilha Vilar Salvador',
      email: 'arthurpvilar@gmail.com'
    }
  }
]
