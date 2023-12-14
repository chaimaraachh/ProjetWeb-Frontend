import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmaplistComponent } from './roadmaps/roadmaplist/roadmaplist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quizpage/quiz/quiz.component';
import { QuestionComponent } from './quizpage/question/question.component';

const routes: Routes = [
  { path: "roadmaps", component: RoadmaplistComponent },
  { path: "dashboard", component: DashboardComponent },
  { path : "quiz", component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
