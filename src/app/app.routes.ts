import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';
import { ExamComponent } from './exam/exam.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'exam/:code', component: ExamComponent },
];
