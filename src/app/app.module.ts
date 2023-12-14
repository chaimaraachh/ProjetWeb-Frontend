import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoadmapComponent } from './roadmaps/roadmap/roadmap.component';
import { RoadmaplistComponent } from './roadmaps/roadmaplist/roadmaplist.component';
import { MilestoneComponent } from './milestones/milestone/milestone.component';
import { MilestonelistComponent } from './milestones/milestonelist/milestonelist.component';
import { MilestonedetailsComponent } from './milestones/milestonedetails/milestonedetails.component';
import { QuizComponent } from './quizpage/quiz/quiz.component';
import { QuestionComponent } from './quizpage/question/question.component';
import { SearchComponent } from './search/search.component';
import { HomedescriptionComponent } from './homedescription/homedescription.component';
import { MovingImagesComponent } from './moving-images/moving-images.component';
import { ScoringdashboardComponent } from './scoringdashboard/scoringdashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RoadmapitemComponent } from './roadmaps/roadmapitem/roadmapitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RoadmapComponent,
    RoadmaplistComponent,
    MilestoneComponent,
    MilestonelistComponent,
    MilestonedetailsComponent,
    QuizComponent,
    QuestionComponent,
    SearchComponent,
    HomedescriptionComponent,
    MovingImagesComponent,
    ScoringdashboardComponent,
    AboutusComponent,
    RoadmapitemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
