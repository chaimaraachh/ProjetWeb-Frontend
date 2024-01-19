import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Question } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  //get the questions 
  milestoneid: number=1;
  quizForm: FormGroup;
  questions: Question[] = [
    new Question(),
    new Question(),
  ];
  constructor(
    private fb: FormBuilder,
    private acr: ActivatedRoute,
    private router: Router) {
    this.quizForm = this.fb.group({});
    this.milestoneid = parseInt(this.acr.snapshot.params['milestoneid']);
  }

  ngOnInit() {
    //this.questions = this.questions.filter(question => question.testQuizQuizID === this.milestoneid);
    this.questions.forEach((question, index) => {
      this.quizForm.addControl('question' + index, this.fb.control(''));
    });
    this.startTimer();
  }

  quizDuration:number = 60; // Quiz duration in seconds
  quizStartTime!: Date; // Time when the quiz starts
  remainingTime:number = 0;  
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
      }
    }, timerInterval);
  }
  
  // HostListener to detect when the user tries to leave the page
  @HostListener('window:beforeunload', ['$event'])
  leavingPageAlert($event: any): void {
      $event.returnValue = 'Are you sure you want to leave? Your progress may be lost.';
  }

  submitQuiz() {
    alert('Form submitted!');
    // Add logic to handle form submission here
  }

}
