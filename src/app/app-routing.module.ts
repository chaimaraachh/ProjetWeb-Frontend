import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapComponent } from './roadmaps/roadmap/roadmap.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ScoringdashboardComponent } from './scoringdashboard/scoringdashboard.component';
import { HomedescriptionComponent } from './homedescription/homedescription.component';
import { RoadmaplistComponent } from './roadmaps/roadmaplist/roadmaplist.component';
import { QuizComponent } from './quizpage/quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomedescriptionComponent },
  { path: 'roadmaps', component: RoadmaplistComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'scoringdashboard', component: ScoringdashboardComponent  },
  { path: 'quiz', component: QuizComponent  },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
