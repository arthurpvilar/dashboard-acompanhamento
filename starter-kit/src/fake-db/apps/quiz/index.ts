// Type Imports
import type { Quiz } from '@/types/apps/quizTypes'

export const db: Quiz = {
  quizzes: [
    {
      id: 1,
      title: 'Conhecimentos Gerais',
      description:
        'Esse quiz de "Conhecimentos Gerais" é uma atividade interativa projetada para testar e expandir a amplitude de conhecimento de um indivíduo em diversas áreas. Esse tipo de quiz pode ser utilizado tanto em ambientes educacionais quanto em situações de lazer, proporcionando uma maneira divertida e desafiadora de aprender e revisar informações.',
      identifier: '60b9',
      logo: 'ri-angularjs-line',
      image:
        'https://www.shutterstock.com/shutterstock/photos/1751379035/display_1500/stock-photo-focused-african-student-wear-headphones-studying-on-line-do-exercise-using-laptop-watching-video-1751379035.jpg',
      averageTime: 458,
      sociologicalData: [
        {
          id: 0,
          name: 'Conhecimento',
          value: 10,
          color: 'primary'
        },
        {
          id: 1,
          name: 'Raciocínio',
          value: 8,
          color: 'secondary'
        },
        {
          id: 2,
          name: 'Cultura',
          value: 7,
          color: 'success'
        },
        {
          id: 3,
          name: 'História',
          value: 9,
          color: 'warning'
        },
        {
          id: 4,
          name: 'Geografia',
          value: 6,
          color: 'info'
        }
      ],
      questions: [
        {
          id: 1,
          sociologicalId: 0,
          question: 'Qual é a capital da França?',
          options: ['Paris', 'Lyon', 'Marselha', 'Nice'],
          answer: 'Paris',
          weight: 1.5
        },
        {
          id: 2,
          sociologicalId: 1,
          question: 'Quem descobriu a América?',
          options: ['Cristóvão Colombo', 'Pedro Álvares Cabral', 'Vasco da Gama', 'Fernando de Magalhães'],
          answer: 'Cristóvão Colombo',
          weight: 2.0
        },
        {
          id: 3,
          sociologicalId: 2,
          question: "Qual é o elemento químico representado pelo símbolo 'O'?",
          options: ['Oxigênio', 'Ouro', 'Prata', 'Platina'],
          answer: 'Oxigênio',
          weight: 1.2
        },
        {
          id: 4,
          sociologicalId: 3,
          question: 'Qual foi o evento que marcou o início da Segunda Guerra Mundial?',
          options: [
            'Invasão da Polônia',
            'Ataque a Pearl Harbor',
            'Assassinato de Franz Ferdinand',
            'Queda do Muro de Berlim'
          ],
          answer: 'Invasão da Polônia',
          weight: 2.5
        },
        {
          id: 5,
          sociologicalId: 4,
          question: 'Qual é o maior continente do mundo?',
          options: ['Ásia', 'África', 'América do Norte', 'Europa'],
          answer: 'Ásia',
          weight: 1.8
        },
        {
          id: 6,
          sociologicalId: 0,
          question: 'Quantos estados tem o Brasil?',
          options: ['26', '27', '28', '29'],
          answer: '27',
          weight: 2.2
        },
        {
          id: 7,
          sociologicalId: 1,
          question: 'Qual a fórmula química da água?',
          options: ['H2O', 'CO2', 'O2', 'NH3'],
          answer: 'H2O',
          weight: 1.1
        },
        {
          id: 8,
          sociologicalId: 2,
          question: 'Quem pintou a Mona Lisa?',
          options: ['Leonardo da Vinci', 'Michelangelo', 'Vincent van Gogh', 'Pablo Picasso'],
          answer: 'Leonardo da Vinci',
          weight: 2.3
        },
        {
          id: 9,
          sociologicalId: 3,
          question: 'Em que ano o homem pisou na lua pela primeira vez?',
          options: ['1965', '1969', '1971', '1974'],
          answer: '1969',
          weight: 2.0
        },
        {
          id: 10,
          sociologicalId: 4,
          question: 'Qual é o maior oceano do mundo?',
          options: ['Atlântico', 'Pacífico', 'Índico', 'Ártico'],
          answer: 'Pacífico',
          weight: 1.9
        },
        {
          id: 11,
          sociologicalId: 0,
          question: 'Qual é o planeta mais próximo do sol?',
          options: ['Mercúrio', 'Vênus', 'Terra', 'Marte'],
          answer: 'Mercúrio',
          weight: 2.1
        },
        {
          id: 12,
          sociologicalId: 1,
          question: 'Qual é a principal composição química do gás natural?',
          options: ['Metano', 'Etano', 'Propano', 'Butano'],
          answer: 'Metano',
          weight: 1.7
        },
        {
          id: 13,
          sociologicalId: 2,
          question: 'Qual é a montanha mais alta do mundo?',
          options: ['Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
          answer: 'Everest',
          weight: 2.4
        },
        {
          id: 14,
          sociologicalId: 3,
          question: 'Quem foi o primeiro presidente dos Estados Unidos?',
          options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
          answer: 'George Washington',
          weight: 1.6
        },
        {
          id: 15,
          sociologicalId: 4,
          question: 'Qual país tem a maior população do mundo?',
          options: ['China', 'Índia', 'Estados Unidos', 'Indonésia'],
          answer: 'China',
          weight: 1.4
        }
      ],
      completedQuiz: 10,
      totalQuiz: 15,
      time: 600,
      color: 'primary',
      owner: {
        id: 1,
        role: 'Admin',
        email: 'admin@example.com',
        status: 'Active',
        avatar: 'https://example.com/avatar1.jpg',
        company: 'Example Corp',
        country: 'USA',
        contact: '+1234567890',
        fullName: 'John Doe',
        username: 'johndoe',
        currentPlan: 'Enterprise',
        avatarColor: 'primary'
      },
      users: [
        {
          id: '567890',
          quizId: 1,
          averageTime: 874,
          completedQuestions: [
            {
              id: 1,
              question: 'Qual é a capital da França?',
              answered: true
            },
            {
              id: 2,
              question: 'Quem descobriu a América?',
              answered: true
            }
          ]
        }
      ]
    },
    {
      id: 2,
      image: 'https://example.com/quiz2.jpg',
      logo: 'ri-angularjs-line',
      title: 'Matemática Básica',
      description: 'Testes seus conhecimentos de matemática básica.',
      identifier: '49c0',
      averageTime: 874,
      sociologicalData: [
        {
          id: 0,
          name: 'Matemática',
          value: 10,
          color: 'primary'
        },
        {
          id: 1,
          name: 'Raciocínio Lógico',
          value: 8,
          color: 'secondary'
        },
        {
          id: 2,
          name: 'Álgebra',
          value: 7,
          color: 'success'
        },
        {
          id: 3,
          name: 'Geometria',
          value: 9,
          color: 'warning'
        },
        {
          id: 4,
          name: 'Estatística',
          value: 6,
          color: 'info'
        }
      ],
      questions: [
        {
          id: 1,
          sociologicalId: 0,
          question: 'Quanto é 2 + 2?',
          options: ['3', '4', '5', '6'],
          answer: '4',
          weight: 1.4
        },
        {
          id: 2,
          sociologicalId: 1,
          question: 'Se João tem 5 maçãs e dá 2 para Maria, quantas ele terá?',
          options: ['2', '3', '4', '5'],
          answer: '3',
          weight: 1.6
        },
        {
          id: 3,
          sociologicalId: 2,
          question: 'Qual é a fórmula da área de um círculo?',
          options: ['πr²', '2πr', 'πd', '2r'],
          answer: 'πr²',
          weight: 2.1
        },
        {
          id: 4,
          sociologicalId: 3,
          question: 'Qual é a soma dos ângulos internos de um triângulo?',
          options: ['180°', '360°', '90°', '270°'],
          answer: '180°',
          weight: 2.2
        },
        {
          id: 5,
          sociologicalId: 4,
          question: 'Qual é a média de 2, 4, 6 e 8?',
          options: ['4', '5', '6', '8'],
          answer: '5',
          weight: 1.5
        },
        {
          id: 6,
          sociologicalId: 0,
          question: 'Quanto é 10 dividido por 2?',
          options: ['2', '3', '4', '5'],
          answer: '5',
          weight: 1.8
        },
        {
          id: 7,
          sociologicalId: 1,
          question: 'Qual é a raiz quadrada de 49?',
          options: ['6', '7', '8', '9'],
          answer: '7',
          weight: 1.3
        },
        {
          id: 8,
          sociologicalId: 2,
          question: 'Se x + 2 = 5, qual é o valor de x?',
          options: ['2', '3', '4', '5'],
          answer: '3',
          weight: 2.4
        },
        {
          id: 9,
          sociologicalId: 3,
          question: 'Qual é o perímetro de um quadrado de lado 4?',
          options: ['8', '12', '16', '20'],
          answer: '16',
          weight: 2.5
        },
        {
          id: 10,
          sociologicalId: 4,
          question: 'Qual é a variância dos valores 1, 2, 3 e 4?',
          options: ['1.25', '1.5', '2', '2.5'],
          answer: '1.25',
          weight: 1.9
        },
        {
          id: 11,
          sociologicalId: 0,
          question: 'Quanto é 5% de 200?',
          options: ['5', '10', '15', '20'],
          answer: '10',
          weight: 1.7
        },
        {
          id: 12,
          sociologicalId: 1,
          question: 'Qual é a representação decimal de 1/3?',
          options: ['0.33', '0.5', '0.75', '1'],
          answer: '0.33',
          weight: 1.1
        },
        {
          id: 13,
          sociologicalId: 2,
          question: 'Quanto é 2 elevado a 3?',
          options: ['6', '7', '8', '9'],
          answer: '8',
          weight: 1.2
        },
        {
          id: 14,
          sociologicalId: 3,
          question: 'Qual é a hipotenusa de um triângulo retângulo com catetos de 3 e 4?',
          options: ['5', '6', '7', '8'],
          answer: '5',
          weight: 2.0
        },
        {
          id: 15,
          sociologicalId: 4,
          question: 'Qual é o desvio padrão dos valores 1, 2, 3 e 4?',
          options: ['0.5', '1', '1.5', '2'],
          answer: '1',
          weight: 1.9
        }
      ],
      completedQuiz: 8,
      totalQuiz: 15,
      time: 500,
      color: 'secondary',
      owner: {
        id: 1,
        role: 'Admin',
        email: 'admin@example.com',
        status: 'Active',
        avatar: 'https://example.com/avatar1.jpg',
        company: 'Example Corp',
        country: 'USA',
        contact: '+1234567890',
        fullName: 'John Doe',
        username: 'johndoe',
        currentPlan: 'Enterprise',
        avatarColor: 'primary'
      },
      users: [
        {
          id: '667890',
          quizId: 2,
          averageTime: 874,
          completedQuestions: [
            {
              id: 1,
              question: 'Quanto é 2 + 2?',
              answered: true
            },
            {
              id: 2,
              question: 'Se João tem 5 maçãs e dá 2 para Maria, quantas ele terá?',
              answered: true
            }
          ]
        }
      ]
    },
    {
      id: 3,
      image: 'https://example.com/quiz3.jpg',
      title: 'Ciências Naturais',
      logo: 'ri-angularjs-line',
      description: 'Teste seus conhecimentos em ciências naturais.',
      identifier: '88b5',
      averageTime: 874,
      sociologicalData: [
        {
          id: 0,
          name: 'Biologia',
          value: 10,
          color: 'primary'
        },
        {
          id: 1,
          name: 'Química',
          value: 8,
          color: 'secondary'
        },
        {
          id: 2,
          name: 'Física',
          value: 7,
          color: 'success'
        },
        {
          id: 3,
          name: 'Astronomia',
          value: 9,
          color: 'warning'
        },
        {
          id: 4,
          name: 'Geologia',
          value: 6,
          color: 'info'
        }
      ],
      questions: [
        {
          id: 1,
          sociologicalId: 0,
          question: 'Qual é o processo pelo qual as plantas produzem energia?',
          options: ['Fotossíntese', 'Respiração', 'Fermentação', 'Transpiração'],
          answer: 'Fotossíntese',
          weight: 2.0
        },
        {
          id: 2,
          sociologicalId: 1,
          question: 'Qual é o símbolo químico da água?',
          options: ['H2O', 'H2O2', 'O2', 'HO2'],
          answer: 'H2O',
          weight: 1.5
        },
        {
          id: 3,
          sociologicalId: 2,
          question: 'Qual é a unidade de medida da força no Sistema Internacional?',
          options: ['Newton', 'Joule', 'Watt', 'Pascal'],
          answer: 'Newton',
          weight: 2.2
        },
        {
          id: 4,
          sociologicalId: 3,
          question: 'Qual é o planeta mais próximo do sol?',
          options: ['Mercúrio', 'Vênus', 'Terra', 'Marte'],
          answer: 'Mercúrio',
          weight: 2.3
        },
        {
          id: 5,
          sociologicalId: 4,
          question: 'Qual é a camada mais externa da Terra?',
          options: ['Crosta', 'Manto', 'Núcleo Externo', 'Núcleo Interno'],
          answer: 'Crosta',
          weight: 1.9
        },
        {
          id: 6,
          sociologicalId: 0,
          question: 'Qual é a principal função dos rins no corpo humano?',
          options: ['Filtrar sangue', 'Digestão', 'Produção de hormônios', 'Proteção de órgãos'],
          answer: 'Filtrar sangue',
          weight: 2.4
        },
        {
          id: 7,
          sociologicalId: 1,
          question: 'Qual é o pH neutro da água pura?',
          options: ['7', '5', '9', '3'],
          answer: '7',
          weight: 1.8
        },
        {
          id: 8,
          sociologicalId: 2,
          question: 'Qual é a velocidade da luz no vácuo?',
          options: ['300.000 km/s', '150.000 km/s', '200.000 km/s', '250.000 km/s'],
          answer: '300.000 km/s',
          weight: 2.1
        },
        {
          id: 9,
          sociologicalId: 3,
          question: 'Qual é a maior lua de Júpiter?',
          options: ['Ganimedes', 'Europa', 'Io', 'Calisto'],
          answer: 'Ganimedes',
          weight: 1.6
        },
        {
          id: 10,
          sociologicalId: 4,
          question: 'Qual é o principal componente do núcleo da Terra?',
          options: ['Ferro', 'Níquel', 'Silício', 'Oxigênio'],
          answer: 'Ferro',
          weight: 1.7
        },
        {
          id: 11,
          sociologicalId: 0,
          question: 'Qual é a maior célula do corpo humano?',
          options: ['Óvulo', 'Célula nervosa', 'Hemácia', 'Célula muscular'],
          answer: 'Óvulo',
          weight: 2.5
        },
        {
          id: 12,
          sociologicalId: 1,
          question: 'Qual é a fórmula química do sal de cozinha?',
          options: ['NaCl', 'KCl', 'CaCO3', 'MgSO4'],
          answer: 'NaCl',
          weight: 1.3
        },
        {
          id: 13,
          sociologicalId: 2,
          question: 'Qual é a terceira lei de Newton?',
          options: ['Ação e reação', 'Inércia', 'F = m.a', 'Gravitação universal'],
          answer: 'Ação e reação',
          weight: 2.0
        },
        {
          id: 14,
          sociologicalId: 3,
          question: 'Qual é o maior planeta do sistema solar?',
          options: ['Júpiter', 'Saturno', 'Netuno', 'Urano'],
          answer: 'Júpiter',
          weight: 1.4
        },
        {
          id: 15,
          sociologicalId: 4,
          question: 'Qual é o tipo de rocha formada pelo resfriamento do magma?',
          options: ['Ígnea', 'Sedimentar', 'Metamórfica', 'Orgânica'],
          answer: 'Ígnea',
          weight: 2.1
        }
      ],
      completedQuiz: 12,
      totalQuiz: 15,
      time: 700,
      color: 'success',
      owner: {
        id: 1,
        role: 'Admin',
        email: 'admin@example.com',
        status: 'Active',
        avatar: 'https://example.com/avatar1.jpg',
        company: 'Example Corp',
        country: 'USA',
        contact: '+1234567890',
        fullName: 'John Doe',
        username: 'johndoe',
        currentPlan: 'Enterprise',
        avatarColor: 'primary'
      },
      users: [
        {
          id: '767890',
          quizId: 3,
          averageTime: 635,
          completedQuestions: [
            {
              id: 1,
              question: 'Qual é o processo pelo qual as plantas produzem energia?',
              answered: true
            },
            {
              id: 2,
              question: 'Qual é o símbolo químico da água?',
              answered: true
            }
          ]
        }
      ]
    }
  ]
}
