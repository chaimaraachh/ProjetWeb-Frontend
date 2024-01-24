import { Component, HostListener, OnInit } from '@angular/core';
import { Question } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ApiUrl } from 'src/app/config/config';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  id: number ;
  questions: Question[];
  userAnswers: { [id: number]: number } = {};
  quizDuration:number ; // Quiz duration in seconds
  quizStartTime!: Date; // Time when the quiz starts
  remainingTime !:number;  

  constructor(
    private acr: ActivatedRoute,
    private quizService: QuizService,
    private router: Router,
    private apiService: ApiServiceService
    ) {
    this.questions = [];
    this.id = this.acr.snapshot.params['id'];
    this.quizDuration = 60; // Quiz duration in seconds
  }

  ngOnInit() {
    this.quizService.getQuestions(this.id).subscribe({
      next: (response) => {
        //console.log(response);
        this.questions = response;
        // Initialize userAnswers with -1 for each question
        this.questions.forEach(question => {
          this.userAnswers[question.id] = -1;
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.startTimer();
  }

  startTimer() {
    this.quizStartTime = new Date(); // Record the start time
    const timerInterval = 1000;
    const timer = setInterval(() => {
      const now = new Date();
      const elapsedTime = Math.round((now.getTime() - this.quizStartTime.getTime()) / 1000);
      this.remainingTime = Math.max(this.quizDuration - elapsedTime, 0);
      if (this.remainingTime <= 0) {
        clearInterval(timer);
        // Handle timer reaching 0 here
        this.submitQuiz() ;
      }
    }, timerInterval);
  }
  
  // HostListener to detect when the user tries to leave the page
  @HostListener('window:beforeunload', ['$event'])
  leavingPageAlert($event: any): void {
      $event.returnValue = 'Are you sure you want to leave? Your progress may be lost.';
  }

  onAnswer(id: number, answerIndex: number) {
    this.userAnswers[id] = answerIndex;
  }

  submitQuiz() {
    const answers = Object.entries(this.userAnswers).map(([id, answerIndex]) => ({
      id: parseInt(id),
      userAnswer: answerIndex
    }));

    const payload = {
      answers: answers
    };

    // Send the data to the backend
    this.apiService.post(ApiUrl.verifyQuiz, payload).subscribe({
      next: (response) => {
        // Handle the response here
        console.log(response);
        alert("your score is :"+response.score);
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.router.navigate(['/home']);
  }

}
