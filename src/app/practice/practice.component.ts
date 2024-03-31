import { Component } from '@angular/core';
import { Exam } from '../exam/exam.entity';
import { ExamComponent } from "../exam/exam.component";

@Component({
    selector: 'app-practice',
    standalone: true,
    templateUrl: './practice.component.html',
    styleUrl: './practice.component.css',
    imports: [ExamComponent]
})

export class PracticeComponent {

  public courseDiscipline: Array<{
    title: string;
    code: string;
  }> = [
    {
      title: "Fundamentos de Sistema de Informação",
      code: "/exam/FSI"
    },
    {
      title: "Estrutura de Computadores",
      code: "/exam/EC"
    }
  ]
}
