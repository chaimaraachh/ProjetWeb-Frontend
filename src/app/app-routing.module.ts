import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapComponent } from './roadmaps/roadmap/roadmap.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ScoringdashboardComponent } from './scoringdashboard/scoringdashboard.component';
import { HomedescriptionComponent } from './homedescription/homedescription.component';
import { RoadmaplistComponent } from './roadmaps/roadmaplist/roadmaplist.component';
import { QuizComponent } from './quizpage/quiz/quiz.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { AddroadmapComponent } from './admin/addroadmap/addroadmap.component';
import { AddmilestoneComponent } from './admin/addmilestone/addmilestone.component';
import { AddquestionsComponent } from './admin/addquestions/addquestions.component';
import { Auth2Guard } from './guard/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomedescriptionComponent },
  { path: 'roadmaps', component: RoadmaplistComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'scoringdashboard', component: ScoringdashboardComponent  },
  { path: 'quiz/:milestoneid', component: QuizComponent  },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'login', component: LoginComponent , canActivate: [Auth2Guard]},
  { path: 'signup', component: SignupComponent},
  { path: 'adminpanel', component: AdminpanelComponent },
  { path: 'addroadmap', component: AddroadmapComponent },
  {path : 'addmilestone', component: AddmilestoneComponent},
  {path : 'addquestion', component: AddquestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
