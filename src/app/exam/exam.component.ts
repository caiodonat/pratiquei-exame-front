import { Component, Input, OnInit } from '@angular/core';
import { Exam } from './exam.entity';
import { ActivatedRoute } from '@angular/router';
import { examsData } from './exam.data';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent implements OnInit {
  @Input()
  courseDisciplineCode?: string | null;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.courseDisciplineCode = this.route.snapshot.paramMap.get('code')

    const targetExam = examsData.find(e => e.code == this.courseDisciplineCode);

    if (targetExam != undefined) {
      this.questions = targetExam?.questions;
    }
  }

  questions: Exam["questions"] = [];
}
