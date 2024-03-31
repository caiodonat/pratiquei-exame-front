import { Component } from '@angular/core';
import { Exam } from '../exam/exam.entity';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  questions: Exam["questions"] = [
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
    },
  ];
}
