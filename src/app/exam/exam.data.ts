import { Exam } from "./exam.entity";

export const examsData: Exam[] = [
  {
    title: "Fundamentos de Sistema de Informação",
    code: "FSI",
    questions: [
      {
        description:
          'Qual é uma boa fonte para realizar o download seguro de aplicativos Android?',
        alternatives: [
          {
            description: 'Google Play',
            isCorrect: true,
          },
          {
            description: 'sites de freeware',
            isCorrect: false,
          },
          {
            description: 'iTunes',
            isCorrect: false,
          },
          {
            description: 'Apple App Store',
            isCorrect: false,
          },
        ],
      },
      {
        description:
          'Qual é o objetivo de usar o recurso de brilho automático em um dispositivo móvel com uma tela LCD?',
        alternatives: [
          {
            description: 'para impedir o efeito de queima na tela',
            isCorrect: true,
          },
          {
            description: 'para reduzir a interferência da luz solar',
            isCorrect: false,
          },
          {
            description: 'economizar energia da bateria',
            isCorrect: false,
          },
          {
            description: 'para exibir mensagens de texto com melhor contraste',
            isCorrect: false,
          },
        ],
      }
    ]
  },
  {
    title: "Estrutura de Computadores",
    code: "EC",
    questions: [
      {
        description: "Estrutura de Computadores 1",
        alternatives: [
          {
            description: "Alternative 1",
            isCorrect: false
          }
        ]
      }
    ]
  }
]
