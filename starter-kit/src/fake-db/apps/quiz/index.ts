// Type Imports
import type { Quiz, QuizDetailsDto } from '@/types/apps/quizTypes'
import { UserRole, UserStatus } from '@/types/apps/userTypes'

export const dbDetailed: QuizDetailsDto[] = [
  {
    id: 5,
    title: 'Questionário da aula 01 até aula 03',
    identifier: 'START0103LAB',
    description:
      '<p style="text-align: justify">Essas perguntas são voltadas para avaliar a compreensão técnica, o raciocínio lógico e a aplicação de conceitos fundamentais em áreas como engenharia, robótica e estruturas físicas. Elas exploram temas como a importância de encaixes precisos, a funcionalidade de robôs, o papel das alavancas e dos centros de equilíbrio, além de conceitos estruturais em construções. As questões incentivam os participantes a refletirem sobre a relação entre segurança, estabilidade, eficiência e cooperação, proporcionando uma base sólida para o entendimento prático e teórico desses tópicos essenciais.</p>',
    category: 'Start Lab',
    image: {
      imageFile: null,
      imageUrl: 'https://www.senaisolucoes.com.br/xp_images/STARTLABENCAIXE.png',
      blobData: null
    },
    audio: undefined,
    sociologicalDataStatistics: [
      {
        id: 1,
        name: 'Reposta Certa',
        value: 50,
        color: '#2EC'
      },
      {
        id: 2,
        name: 'Resposta Errada',
        value: 63,
        color: '#EB3D63'
      }
    ],
    totalAttempts: 528,
    averageWeight: 2.8,
    completionRate: 92.5,
    averageCompletionTime: 32,
    questions: [
      {
        id: 2,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual das seguintes opções melhor descreve um encaixe perfeito?</p>',
        options: [
          {
            id: 1,
            title: '<p>Duas peças se unem perfeitamente, sem deixar espaços entre elas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 2,
            title: '<p>Duas peças se unem, mas há pequenos espaços entre elas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 3,
            title: '<p>Duas peças se separam, mas não deixam espaços entre elas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 3,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Robôs possuem várias peças como braços, motores e circuitos. Para que o robô funcione bem, essas peças devem:</p>',
        options: [
          {
            id: 4,
            title: '<p>Estar muito bem unidas e sem folga, ou seja, encaixadas perfeitamente.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 5,
            title: '<p>Estar muito bem unidas e sem folga, ou seja, desencaixadas perfeitamente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 6,
            title: '<p>Estar separadas e com folga, ou seja, desencaixadas perfeitamente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 3,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>O que é um encaixe?</p>',
        options: [
          {
            id: 7,
            title: '<p>Um encaixe é quando duas peças se unem perfeitamente, sem deixar espaços entre elas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 8,
            title: '<p>Um encaixe é quando duas peças se unem, deixando espaços entre elas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 9,
            title: '<p>Um encaixe é quando duas peças se separam, sem deixar espaços entre elas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 4,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Robôs possuem várias peças como braços, motores e circuitos. Para que o robô funcione bem, essas peças devem:</p>',
        options: [
          {
            id: 10,
            title: '<p>Estar muito bem unidas e sem folga, ou seja, encaixadas perfeitamente.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 11,
            title: '<p>Estar muito bem unidas e sem folga, ou seja, desencaixadas perfeitamente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 12,
            title: '<p>Estar separadas e com folga, ou seja, desencaixadas perfeitamente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 5,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual das seguintes afirmações é verdadeira sobre o funcionamento de um robô?</p>',
        options: [
          {
            id: 13,
            title:
              '<p>As peças do robô devem estar bem unidas e sem folga para garantir um funcionamento eficiente.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 14,
            title:
              '<p>As peças do robô devem estar separadas e com folga para garantir um funcionamento eficiente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 15,
            title: '<p>As peças do robô devem estar desencaixadas para garantir um funcionamento eficiente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 6,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>O que pode acontecer se as peças de um robô não estiverem encaixadas perfeitamente?</p>',
        options: [
          {
            id: 16,
            title: '<p>O robô pode funcionar de maneira mais eficiente.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 17,
            title: '<p>O robô pode apresentar falhas ou mau funcionamento.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 18,
            title: '<p>O robô pode se tornar mais fácil de desmontar.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 7,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Ao nosso redor existem diversos objetos que foram construídos com o encaixem de peças, como carros, móveis, casas e robôs. Por que as peças desses objetos devem ser encaixadas perfeitamente?</p>',
        options: [
          {
            id: 19,
            title: '<p>Para que eles fiquem apenas bonitos</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 20,
            title: '<p>Para que eles não desmontem e funcionem bem</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 21,
            title: '<p>Para que eles desmontem e não funcionem bem</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 8,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Qual é a consequência de um encaixe imperfeito em objetos como carros, móveis, casas e robôs?</p>',
        options: [
          {
            id: 22,
            title: '<p>Eles podem desmontar e não funcionar bem.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 23,
            title: '<p>Eles podem funcionar melhor</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 24,
            title: '<p>Eles podem ficar mais bonitos.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 9,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Como o encaixe perfeito das peças contribui para a segurança e durabilidade de objetos como carros e casas?</p>',
        options: [
          {
            id: 25,
            title: '<p>Garante que as peças fiquem firmes e seguras, evitando acidentes.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 26,
            title: '<p>Facilita a desmontagem das peças.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 27,
            title: '<p>Torna os objetos mais fáceis de mover.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 10,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Como e por quem os ambientes públicos como parquinhos e praças podem ser utilizados?</p>',
        options: [
          {
            id: 28,
            title: '<p>De forma individual apenas por pessoas que podem pagar a entrada.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 29,
            title: '<p>De forma individual apenas por pessoas que entrarem primeiro</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 30,
            title:
              '<p style="text-align: justify">Por todas as pessoas que desejarem, desde que compartilhem o ambiente de forma harmoniosa, pois tudo que é público, é de todos.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 11,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual é a principal característica dos ambientes públicos?</p>',
        options: [
          {
            id: 31,
            title: '<p>Eles são exclusivos para grupos específicos de pessoas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 32,
            title:
              '<p style="text-align: justify">Eles são abertos e acessíveis para todos, independentemente de quem chega primeiro ou de quem pode pagar.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 33,
            title: '<p>Eles são utilizados apenas para eventos privados.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 12,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>O que é uma gangorra?</p>',
        options: [
          {
            id: 34,
            title: '<p>É um brinquedo formado por duas rodas colocadas em um centro de desequilíbrio.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 35,
            title: '<p>É um brinquedo formado por uma haste colocada em um centro de equilíbrio.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 36,
            title: '<p>É um brinquedo formado por uma roda colocada em um centro de equilíbrio.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 13,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual das opções melhor descreve como uma gangorra funciona?</p>',
        options: [
          {
            id: 37,
            title: '<p>Um brinquedo que se move apenas de um lado para o outro sem alternar.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 38,
            title:
              '<p style="text-align: justify">Um brinquedo que permite que duas pessoas alternem entre subir e descer, dependendo da força aplicada em cada.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 39,
            title: '<p>Um brinquedo que gira em círculo completo quando usado.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 14,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>O que é um centro de equilíbrio de um objeto?</p>',
        options: [
          {
            id: 40,
            title:
              '<p style="text-align: justify">É um ponto, localizado geralmente no centro de um objeto, onde o peso do objeto fica perfeitamente distribuído, portanto, equilibrado.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 41,
            title:
              '<p style="text-align: justify">É uma haste, localizada geralmente na ponta direita de um objeto, onde o peso do objeto fica perfeitamente distribuído, portanto, equilibrado.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 42,
            title:
              '<p>É um ponto, localizado geralmente no centro de um objeto, onde o peso do objeto fica não distribuído, portanto, não equilibrado.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 15,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Por que o centro de equilíbrio é importante para o funcionamento de objetos como a gangorra?</p>',
        options: [
          {
            id: 43,
            title:
              '<p>Porque ele permite que o peso seja distribuído de maneira desigual, o que melhora o funcionamento da gangorra.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 44,
            title:
              '<p>Porque ele permite que o peso seja distribuído de maneira equilibrada, garantindo que a gangorra funcione corretamente.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 45,
            title:
              '<p>Porque ele está localizado na ponta direita da gangorra, o que é essencial para o funcionamento.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 16,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual a relação entre o centro de equilíbrio e o peso de um robô com rodas?</p>',
        options: [
          {
            id: 46,
            title: '<p>O centro de equilíbrio determina o ponto onde o peso do robô deve estar distribuído.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 47,
            title: '<p>O centro de equilíbrio determina o ponto onde o peso do robô deve estar desequilibrado.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 48,
            title: '<p>O peso do robô indica onde é o centro de equilíbrio.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 17,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p>Por que é importante que o centro de equilíbrio esteja corretamente distribuído em um robô com rodas?</p>',
        options: [
          {
            id: 49,
            title:
              '<p style="text-align: justify">Porque isso permite que o robô mantenha sua estabilidade e funcione corretamente durante o movimento.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 50,
            title: '<p>Porque isso permite que o robô fique sempre em movimento, mesmo em repouso.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 51,
            title:
              '<p>Porque isso faz o robô se desequilibrar facilmente, o que é essencial para seu funcionamento.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 18,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Objetos como carrinhos de mão devem ser bem construídos. Com que os construtores devem tomar muito cuidado na construção de um objeto?</p>',
        options: [
          {
            id: 52,
            title:
              '<p>Com nada, pois não importa a forma como ele foi construído, ele sempre será um objeto indestrutível.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 53,
            title:
              '<p>Com o local onde eles são construídos, pois se o local não estiver limpo os objetos podem quebrar.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 54,
            title:
              '<p>Com a estrutura dos objetos, pois uma estrutura bem feita poderá manter o objeto firme sem quebrar com facilidade.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 19,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Por que a estrutura de um carrinho de mão é importante para seu funcionamento?</p>',
        options: [
          {
            id: 55,
            title:
              '<p>Porque uma estrutura bem feita garante durabilidade e eficiência no transporte de materiais.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 56,
            title: '<p>Porque uma estrutura frágil facilita o uso do carrinho de mão.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 57,
            title: '<p>Porque a estrutura do carrinho de mão não tem impacto no seu desempenho.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 20,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>O que prédios, carros e pontes possuem em comum?</p>',
        options: [
          {
            id: 58,
            title:
              '<p>São objetos que podemos encontrar em nossas cidades e que possuem uma estrutura que os deixam firmes.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 59,
            title:
              '<p>São objetos que podemos encontrar apenas em cidades grandes e que possuem uma estrutura que os deixam firmes.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 60,
            title:
              '<p>São objetos que podemos encontrar apenas em cidades grandes e que não possuem uma estrutura que os deixam firmes.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 21,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Por que é importante que prédios, carros e pontes tenham estruturas firmes?</p>',
        options: [
          {
            id: 61,
            title: '<p>Porque isso garante a segurança e a durabilidade desses objetos.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 62,
            title: '<p>Porque estruturas frágeis são mais fáceis de construir.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 63,
            title: '<p>Porque a firmeza da estrutura não influencia na utilização.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 22,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Objetos podem ser construídos com dois tipos de estruturas: as rígidas e as flexíveis. Qual alternativa fala sobre as estruturas rígidas?</p>',
        options: [
          {
            id: 64,
            title:
              '<p>As estruturas rígidas geralmente possuem formas de um triângulo (chamadas de triangulares), porque elas distribuem o peso de forma uniforme.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 65,
            title:
              '<p>As estruturas rígidas geralmente possuem formas de um triângulo (chamadas de triangulares), porque elas não distribuem o peso de forma uniforme</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 66,
            title:
              '<p>As estruturas rígidas geralmente possuem formas de quadrados (ou quadrangulares), porque elas distribuem o peso de forma uniforme.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 23,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual é a vantagem de utilizar estruturas triangulares em construções rígidas?</p>',
        options: [
          {
            id: 67,
            title:
              '<p>Elas aumentam a estabilidade e a resistência da construção ao distribuir o peso de forma uniforme.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 68,
            title: '<p>Elas reduzem a durabilidade da construção ao concentrar o peso em pontos específicos.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 69,
            title: '<p>Elas são mais fáceis de construir, mas não oferecem muita resistência.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 24,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Objetos podem ser construídos com dois tipos de estruturas: as rígidas e as flexíveis. Qual alternativa fala sobre as estruturas flexíveis?</p>',
        options: [
          {
            id: 70,
            title:
              '<p style="text-align: justify">As estruturas flexíveis geralmente possuem formas de um triângulo (chamadas de triangulares), porque elas distribuem o peso de forma uniforme.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 71,
            title:
              '<p style="text-align: justify">As estruturas flexíveis geralmente possuem formas de um triângulo (chamadas de triangulares), porque elas não distribuem o peso de forma uniforme.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 72,
            title:
              '<p style="text-align: justify">As estruturas flexíveis geralmente possuem formas de quadrados (ou quadrangulares), porque elas podem oferecer flexibilidade ao objeto.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 25,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Quais são algumas vantagens de utilizar estruturas flexíveis em comparação com estruturas rígidas?</p>',
        options: [
          {
            id: 73,
            title:
              '<p style="text-align: justify">Estruturas flexíveis são mais resistentes a impactos e tensões, permitindo que o objeto se adapte a diferentes forças.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 74,
            title:
              '<p style="text-align: justify">Estruturas flexíveis são menos duráveis e menos adaptáveis às forças externas.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 75,
            title:
              '<p style="text-align: justify">Estruturas flexíveis distribuem o peso de maneira uniforme como as rígidas, mas não têm outras vantagens significativas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 26,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Por que as estruturas rígidas e flexíveis estão presentes no corpo de um robô móvel?</p>',
        options: [
          {
            id: 76,
            title:
              '<p style="text-align: justify">Porque a combinação dessas estruturas faz com que os robôs tenham firmeza para ficar em pé, mas que possam também executar tarefas que exijam flexibilidade.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 77,
            title:
              '<p style="text-align: justify">Porque a combinação dessas estruturas faz com que os robôs tenham firmeza para ficar em pé, mas que possam também executar apenas tarefas rígidas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 78,
            title:
              '<p style="text-align: justify">Robôs são construídos apenas com estruturas flexíveis, pois eles devem sempre executar tarefas que exijam flexibilidade.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      },
      {
        id: 27,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p>Qual é a principal vantagem de um robô móvel possuir tanto estruturas rígidas quanto flexíveis?</p>',
        options: [
          {
            id: 79,
            title:
              '<p style="text-align: justify">Isso permite que o robô tenha estabilidade e ao mesmo tempo flexibilidade para se adaptar a diferentes tarefas e ambientes.</p>',
            isChecked: true,
            weight: 1,
            sociologicalData: {
              id: 1,
              name: 'Reposta Certa',
              color: '#2EC'
            }
          },
          {
            id: 80,
            title: '<p style="text-align: justify">Isso faz com que o robô seja mais pesado e difícil de manobrar.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          },
          {
            id: 81,
            title:
              '<p style="text-align: justify">Isso é importante apenas para robôs que precisam executar tarefas estáticas.</p>',
            isChecked: false,
            weight: 1,
            sociologicalData: {
              id: 2,
              name: 'Resposta Errada',
              color: '#EB3D63'
            }
          }
        ],
        answer: '',
        image: {
          imageFile: null,
          imageUrl: 'https://www.senaisolucoes.com.br/xp_images/TDAH.png',
          blobData: null
        },
        audio: undefined
      }
    ],
    owner: {
      index: '80759d4e-39eb-4c5a-aaf9-a030094092fc',
      email: 'arthurpvilar@gmail.com',
      username: 'arthurpvilar',
      fullName: 'Arthur Padilha Vilar Salvador',
      role: UserRole.ADMINISTRATOR,
      status: UserStatus.ATIVO
    }
  },
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
      fullName: 'Arthur Padilha Vilar Salvador',
      role: UserRole.ADMINISTRATOR,
      status: UserStatus.ATIVO
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
      fullName: 'Arthur Padilha Vilar Salvador',
      role: UserRole.ADMINISTRATOR,
      status: UserStatus.ATIVO
    }
  }
]

export const db: Quiz[] = [
  {
    id: 5,
    title: 'Questionário da aula 01 até aula 03',
    identifier: 'START0103LAB',
    type: 'Pergunta e Resposta Dissertativa',
    description:
      '<p style="text-align: justify">Essas perguntas são voltadas para avaliar a compreensão técnica, o raciocínio lógico e a aplicação de conceitos fundamentais em áreas como engenharia, robótica e estruturas físicas. Elas exploram temas como a importância de encaixes precisos, a funcionalidade de robôs, o papel das alavancas e dos centros de equilíbrio, além de conceitos estruturais em construções. As questões incentivam os participantes a refletirem sobre a relação entre segurança, estabilidade, eficiência e cooperação, proporcionando uma base sólida para o entendimento prático e teórico desses tópicos essenciais.</p>',
    category: 'Start Lab',
    image: {
      imageFile: null,
      imageUrl: 'https://www.senaisolucoes.com.br/xp_images/STARTLABENCAIXE.png',
      blobData: null
    },
    audio: null,
    sociologicalData: [
      {
        id: 1,
        name: 'Reposta Certa',
        value: 50,
        color: '#2EC'
      },
      {
        id: 2,
        name: 'Resposta Errada',
        value: 63,
        color: '#EB3D63'
      }
    ],
    questions: [
      {
        id: 2,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual das seguintes opções melhor descreve um encaixe perfeito?</p>',
        options: [
          {
            title: '<p>Duas peças se unem perfeitamente, sem deixar espaços entre elas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Duas peças se unem, mas há pequenos espaços entre elas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Duas peças se separam, mas não deixam espaços entre elas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
          '<p style="text-align: justify">Robôs possuem várias peças como braços, motores e circuitos. Para que o robô funcione bem, essas peças devem:</p>',
        options: [
          {
            title: '<p>Estar muito bem unidas e sem folga, ou seja, encaixadas perfeitamente.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Estar muito bem unidas e sem folga, ou seja, desencaixadas perfeitamente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Estar separadas e com folga, ou seja, desencaixadas perfeitamente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        question: '<p>O que é um encaixe?</p>',
        options: [
          {
            title: '<p>Um encaixe é quando duas peças se unem perfeitamente, sem deixar espaços entre elas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Um encaixe é quando duas peças se unem, deixando espaços entre elas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Um encaixe é quando duas peças se separam, sem deixar espaços entre elas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
          '<p style="text-align: justify">Robôs possuem várias peças como braços, motores e circuitos. Para que o robô funcione bem, essas peças devem:</p>',
        options: [
          {
            title: '<p>Estar muito bem unidas e sem folga, ou seja, encaixadas perfeitamente.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Estar muito bem unidas e sem folga, ou seja, desencaixadas perfeitamente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Estar separadas e com folga, ou seja, desencaixadas perfeitamente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        question: '<p>Qual das seguintes afirmações é verdadeira sobre o funcionamento de um robô?</p>',
        options: [
          {
            title:
              '<p>As peças do robô devem estar bem unidas e sem folga para garantir um funcionamento eficiente.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p>As peças do robô devem estar separadas e com folga para garantir um funcionamento eficiente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>As peças do robô devem estar desencaixadas para garantir um funcionamento eficiente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        question: '<p>O que pode acontecer se as peças de um robô não estiverem encaixadas perfeitamente?</p>',
        options: [
          {
            title: '<p>O robô pode funcionar de maneira mais eficiente.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>O robô pode apresentar falhas ou mau funcionamento.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>O robô pode se tornar mais fácil de desmontar.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
          '<p style="text-align: justify">Ao nosso redor existem diversos objetos que foram construídos com o encaixem de peças, como carros, móveis, casas e robôs. Por que as peças desses objetos devem ser encaixadas perfeitamente?</p>',
        options: [
          {
            title: '<p>Para que eles fiquem apenas bonitos</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Para que eles não desmontem e funcionem bem</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Para que eles desmontem e não funcionem bem</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
          '<p style="text-align: justify">Qual é a consequência de um encaixe imperfeito em objetos como carros, móveis, casas e robôs?</p>',
        options: [
          {
            title: '<p>Eles podem desmontar e não funcionar bem.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Eles podem funcionar melhor</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Eles podem ficar mais bonitos.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
          '<p style="text-align: justify">Como o encaixe perfeito das peças contribui para a segurança e durabilidade de objetos como carros e casas?</p>',
        options: [
          {
            title: '<p>Garante que as peças fiquem firmes e seguras, evitando acidentes.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Facilita a desmontagem das peças.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Torna os objetos mais fáceis de mover.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
          '<p style="text-align: justify">Como e por quem os ambientes públicos como parquinhos e praças podem ser utilizados?</p>',
        options: [
          {
            title: '<p>De forma individual apenas por pessoas que podem pagar a entrada.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>De forma individual apenas por pessoas que entrarem primeiro</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p style="text-align: justify">Por todas as pessoas que desejarem, desde que compartilhem o ambiente de forma harmoniosa, pois tudo que é público, é de todos.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
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
        question: '<p>Qual é a principal característica dos ambientes públicos?</p>',
        options: [
          {
            title: '<p>Eles são exclusivos para grupos específicos de pessoas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p style="text-align: justify">Eles são abertos e acessíveis para todos, independentemente de quem chega primeiro ou de quem pode pagar.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Eles são utilizados apenas para eventos privados.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        question: '<p>O que é uma gangorra?</p>',
        options: [
          {
            title: '<p>É um brinquedo formado por duas rodas colocadas em um centro de desequilíbrio.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>É um brinquedo formado por uma haste colocada em um centro de equilíbrio.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>É um brinquedo formado por uma roda colocada em um centro de equilíbrio.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        question: '<p>Qual das opções melhor descreve como uma gangorra funciona?</p>',
        options: [
          {
            title: '<p>Um brinquedo que se move apenas de um lado para o outro sem alternar.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p style="text-align: justify">Um brinquedo que permite que duas pessoas alternem entre subir e descer, dependendo da força aplicada em cada.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Um brinquedo que gira em círculo completo quando usado.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        question: '<p>O que é um centro de equilíbrio de um objeto?</p>',
        options: [
          {
            title:
              '<p style="text-align: justify">É um ponto, localizado geralmente no centro de um objeto, onde o peso do objeto fica perfeitamente distribuído, portanto, equilibrado.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p style="text-align: justify">É uma haste, localizada geralmente na ponta direita de um objeto, onde o peso do objeto fica perfeitamente distribuído, portanto, equilibrado.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p>É um ponto, localizado geralmente no centro de um objeto, onde o peso do objeto fica não distribuído, portanto, não equilibrado.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        question: '<p>Por que o centro de equilíbrio é importante para o funcionamento de objetos como a gangorra?</p>',
        options: [
          {
            title:
              '<p>Porque ele permite que o peso seja distribuído de maneira desigual, o que melhora o funcionamento da gangorra.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p>Porque ele permite que o peso seja distribuído de maneira equilibrada, garantindo que a gangorra funcione corretamente.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p>Porque ele está localizado na ponta direita da gangorra, o que é essencial para o funcionamento.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 16,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual a relação entre o centro de equilíbrio e o peso de um robô com rodas?</p>',
        options: [
          {
            title: '<p>O centro de equilíbrio determina o ponto onde o peso do robô deve estar distribuído.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>O centro de equilíbrio determina o ponto onde o peso do robô deve estar desequilibrado.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>O peso do robô indica onde é o centro de equilíbrio.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 17,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p>Por que é importante que o centro de equilíbrio esteja corretamente distribuído em um robô com rodas?</p>',
        options: [
          {
            title:
              '<p style="text-align: justify">Porque isso permite que o robô mantenha sua estabilidade e funcione corretamente durante o movimento.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Porque isso permite que o robô fique sempre em movimento, mesmo em repouso.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p>Porque isso faz o robô se desequilibrar facilmente, o que é essencial para seu funcionamento.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 18,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Objetos como carrinhos de mão devem ser bem construídos. Com que os construtores devem tomar muito cuidado na construção de um objeto?</p>',
        options: [
          {
            title:
              '<p>Com nada, pois não importa a forma como ele foi construído, ele sempre será um objeto indestrutível.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p>Com o local onde eles são construídos, pois se o local não estiver limpo os objetos podem quebrar.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p>Com a estrutura dos objetos, pois uma estrutura bem feita poderá manter o objeto firme sem quebrar com facilidade.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
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
        id: 19,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Por que a estrutura de um carrinho de mão é importante para seu funcionamento?</p>',
        options: [
          {
            title:
              '<p>Porque uma estrutura bem feita garante durabilidade e eficiência no transporte de materiais.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Porque uma estrutura frágil facilita o uso do carrinho de mão.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Porque a estrutura do carrinho de mão não tem impacto no seu desempenho.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 20,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>O que prédios, carros e pontes possuem em comum?</p>',
        options: [
          {
            title:
              '<p>São objetos que podemos encontrar em nossas cidades e que possuem uma estrutura que os deixam firmes.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p>São objetos que podemos encontrar apenas em cidades grandes e que possuem uma estrutura que os deixam firmes.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p>São objetos que podemos encontrar apenas em cidades grandes e que não possuem uma estrutura que os deixam firmes.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 21,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Por que é importante que prédios, carros e pontes tenham estruturas firmes?</p>',
        options: [
          {
            title: '<p>Porque isso garante a segurança e a durabilidade desses objetos.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Porque estruturas frágeis são mais fáceis de construir.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Porque a firmeza da estrutura não influencia na utilização.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 22,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Objetos podem ser construídos com dois tipos de estruturas: as rígidas e as flexíveis. Qual alternativa fala sobre as estruturas rígidas?</p>',
        options: [
          {
            title:
              '<p>As estruturas rígidas geralmente possuem formas de um triângulo (chamadas de triangulares), porque elas distribuem o peso de forma uniforme.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p>As estruturas rígidas geralmente possuem formas de um triângulo (chamadas de triangulares), porque elas não distribuem o peso de forma uniforme</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p>As estruturas rígidas geralmente possuem formas de quadrados (ou quadrangulares), porque elas distribuem o peso de forma uniforme.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 23,
        type: 'Pergunta e Resposta Dissertativa',
        question: '<p>Qual é a vantagem de utilizar estruturas triangulares em construções rígidas?</p>',
        options: [
          {
            title:
              '<p>Elas aumentam a estabilidade e a resistência da construção ao distribuir o peso de forma uniforme.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p>Elas reduzem a durabilidade da construção ao concentrar o peso em pontos específicos.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title: '<p>Elas são mais fáceis de construir, mas não oferecem muita resistência.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 24,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Objetos podem ser construídos com dois tipos de estruturas: as rígidas e as flexíveis. Qual alternativa fala sobre as estruturas flexíveis?</p>',
        options: [
          {
            title:
              '<p style="text-align: justify">As estruturas flexíveis geralmente possuem formas de um triângulo (chamadas de triangulares), porque elas distribuem o peso de forma uniforme.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p style="text-align: justify">As estruturas flexíveis geralmente possuem formas de um triângulo (chamadas de triangulares), porque elas não distribuem o peso de forma uniforme.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p style="text-align: justify">As estruturas flexíveis geralmente possuem formas de quadrados (ou quadrangulares), porque elas podem oferecer flexibilidade ao objeto.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 25,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Quais são algumas vantagens de utilizar estruturas flexíveis em comparação com estruturas rígidas?</p>',
        options: [
          {
            title:
              '<p style="text-align: justify">Estruturas flexíveis são mais resistentes a impactos e tensões, permitindo que o objeto se adapte a diferentes forças.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p style="text-align: justify">Estruturas flexíveis são menos duráveis e menos adaptáveis às forças externas.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p style="text-align: justify">Estruturas flexíveis distribuem o peso de maneira uniforme como as rígidas, mas não têm outras vantagens significativas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 26,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p style="text-align: justify">Por que as estruturas rígidas e flexíveis estão presentes no corpo de um robô móvel?</p>',
        options: [
          {
            title:
              '<p style="text-align: justify">Porque a combinação dessas estruturas faz com que os robôs tenham firmeza para ficar em pé, mas que possam também executar tarefas que exijam flexibilidade.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title:
              '<p style="text-align: justify">Porque a combinação dessas estruturas faz com que os robôs tenham firmeza para ficar em pé, mas que possam também executar apenas tarefas rígidas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p style="text-align: justify">Robôs são construídos apenas com estruturas flexíveis, pois eles devem sempre executar tarefas que exijam flexibilidade.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
        id: 27,
        type: 'Pergunta e Resposta Dissertativa',
        question:
          '<p>Qual é a principal vantagem de um robô móvel possuir tanto estruturas rígidas quanto flexíveis?</p>',
        options: [
          {
            title:
              '<p style="text-align: justify">Isso permite que o robô tenha estabilidade e ao mesmo tempo flexibilidade para se adaptar a diferentes tarefas e ambientes.</p>',
            isChecked: true,
            weight: 1,
            sociological: {
              id: 1,
              name: 'Reposta Certa'
            }
          },
          {
            title: '<p style="text-align: justify">Isso faz com que o robô seja mais pesado e difícil de manobrar.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
            }
          },
          {
            title:
              '<p style="text-align: justify">Isso é importante apenas para robôs que precisam executar tarefas estáticas.</p>',
            isChecked: false,
            weight: 1,
            sociological: {
              id: 2,
              name: 'Resposta Errada'
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
    owner: {
      index: '80759d4e-39eb-4c5a-aaf9-a030094092fc',
      email: 'arthurpvilar@gmail.com',
      username: 'arthurpvilar',
      fullName: 'Arthur Padilha Vilar Salvador',
      role: UserRole.ADMINISTRATOR,
      status: UserStatus.ATIVO
    }
  },
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
      email: 'arthurpvilar@gmail.com',
      role: UserRole.ADMINISTRATOR,
      status: UserStatus.ATIVO
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
      email: 'arthurpvilar@gmail.com',
      role: UserRole.ADMINISTRATOR,
      status: UserStatus.ATIVO
    }
  }
]
