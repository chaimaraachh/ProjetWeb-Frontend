import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ApiUrl } from 'src/app/config/config';
import { SharedDataService } from 'src/app/services/shared.data.service';

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
  private timerInterval: number;
  private timer: any;
  private hasQuizBeenSubmitted = false; // New property to track if the quiz has been submitted


  constructor(
    private acr: ActivatedRoute,
    private quizService: QuizService,
    private router: Router,
    private apiService: ApiServiceService,
    private sharedDataService: SharedDataService
    ) {
    this.questions = [];
    this.id = this.acr.snapshot.params['id'];
    this.quizDuration = 5; // Quiz duration in seconds
    this.timerInterval = 1000;
    this.timer = null;

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
    if (!this.timer) {
      this.startTimer();
    }
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
  
  submit() {
    this.router.navigate(['/testresult']);
  }

  submitQuiz() {
    if (this.hasQuizBeenSubmitted) {
      return; // Prevent multiple submissions
    }
    this.hasQuizBeenSubmitted = true;
    const answers = Object.entries(this.userAnswers).map(([id, answerIndex]) => ({
      id: parseInt(id),
      userAnswer: answerIndex
    }));
    const payload = {
      answers: answers
    };
    this.apiService.post(ApiUrl.verifyQuiz, payload).subscribe({
      next: (response) => {
        console.log(response);
        this.sharedDataService.setQuizScore(response.score); // Set the score in shared service
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onAnswer(id: number, answerIndex: number) {
    this.userAnswers[id] = answerIndex;
  }

}
