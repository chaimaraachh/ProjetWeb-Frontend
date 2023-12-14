import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Question } from '../question/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [
    new Question(
      1,
      'What is the capital of France?',
      ['New York', 'London', 'Paris', 'Berlin'],
      'Paris'
    ),
    new Question(
      2,
      'What is the capital of France?',
      ['New York', 'London', 'Paris', 'Berlin'],
      'Paris'
    ),
  ];
  remainingTime = 0; // Initial value for the timer

  quizForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({});
  }

  ngOnInit() {
    this.questions.forEach((question, index) => {
      this.quizForm.addControl('question' + index, this.fb.control(''));
    });
    this.startTimer();
  }

  startTimer() {
    // Set the initial time (in seconds)
    this.remainingTime = 60; // in seconds
    const timerInterval = 1000; // in millisecond
    // Start the timer
    const timer = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        clearInterval(timer); // Stop the timer when it reaches 0
        // You can also add logic to handle the timer reaching 0 here
      }
    }, timerInterval);
  }
  // HostListener to detect when the user tries to leave the page
  @HostListener('window:beforeunload', ['$event'])
  leavingPageAlert($event: any): void {
      $event.returnValue = 'Are you sure you want to leave? Your progress may be lost.';
  }

  onSubmit() {
    console.log(this.quizForm.value);
    // Add logic to handle form submission here
  }

}
