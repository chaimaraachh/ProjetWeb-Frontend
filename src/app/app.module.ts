import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoadmapComponent } from './roadmaps/roadmap/roadmap.component';
import { RoadmaplistComponent } from './roadmaps/roadmaplist/roadmaplist.component';
import { MilestoneComponent } from './roadmaps/milestone/milestone.component';
import { QuizComponent } from './quizpage/quiz/quiz.component';
import { QuestionComponent } from './quizpage/question/question.component';
import { SearchComponent } from './search/search.component';
import { HomedescriptionComponent } from './homedescription/homedescription.component';
import { MovingImagesComponent } from './moving-images/moving-images.component';
import { ScoringdashboardComponent } from './scoringdashboard/scoringdashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RoadmapitemComponent } from './roadmaps/roadmapitem/roadmapitem.component';
import { LoginComponent } from './authentication/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { AddroadmapComponent } from './admin/addroadmap/addroadmap.component';
import { AddmilestoneComponent } from './admin/addmilestone/addmilestone.component';
import { AddquestionsComponent } from './admin/addquestions/addquestions.component';
import { AuthInterceptor } from './authentication/interceptors/auth.interceptor';
import { GetDataComponent } from './admin/get-data/get-data.component';
import { JsonTableComponent } from './json-table/json-table.component';
import { UseritemComponent } from './dashboard/useritem/useritem.component';
import { UserslistComponent } from './dashboard/userslist/userslist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RoadmapComponent,
    RoadmaplistComponent,
    MilestoneComponent,
    QuizComponent,
    QuestionComponent,
    SearchComponent,
    HomedescriptionComponent,
    MovingImagesComponent,
    ScoringdashboardComponent,
    AboutusComponent,
    RoadmapitemComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AdminpanelComponent,
    AddroadmapComponent,
    AddmilestoneComponent,
    AddquestionsComponent,
    GetDataComponent,
    JsonTableComponent,
    UseritemComponent,
    UserslistComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
