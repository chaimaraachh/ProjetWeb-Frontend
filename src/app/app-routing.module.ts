import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapComponent } from './roadmaps/roadmap/roadmap.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ScoringdashboardComponent } from './scoringdashboard/scoringdashboard.component';
import { HomedescriptionComponent } from './homedescription/homedescription.component';
import { RoadmaplistComponent } from './roadmaps/roadmaplist/roadmaplist.component';
import { QuizComponent } from './quizpage/quiz/quiz.component';
import { LeavePageGuardService } from './services/leave-page-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomedescriptionComponent },
  { path: 'roadmaps', component: RoadmaplistComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'scoringdashboard', component: ScoringdashboardComponent  },
  { path: 'quiz', component: QuizComponent  , canDeactivate: [LeavePageGuardService]  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
