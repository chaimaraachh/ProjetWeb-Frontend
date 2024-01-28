import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapComponent } from './roadmaps/roadmap/roadmap.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomedescriptionComponent } from './homedescription/homedescription.component';
import { RoadmaplistComponent } from './roadmaps/roadmaplist/roadmaplist.component';
import { QuizComponent } from './quizpage/quiz/quiz.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { Auth2Guard } from './guard/login.guard';
import { ProfileComponent } from './profile/profile.component';
import { QuizGuard } from './guard/quiz.guard';
import { TestresultComponent } from './quizpage/testresult/testresult.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomedescriptionComponent },
  { path: 'roadmaps', component: RoadmaplistComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'scoringdashboard', component: DashboardComponent  },
  { path: 'quiz/:id', component: QuizComponent ,canActivate: [QuizGuard] , canDeactivate: [QuizGuard]},
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'login', component: LoginComponent , canActivate: [Auth2Guard]},
  { path: 'signup', component: SignupComponent , canActivate: [Auth2Guard]},
  { path: 'adminpanel', component: AdminpanelComponent },
  {path : 'profile' , component: ProfileComponent},
  {path : 'testresult' , component: TestresultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
