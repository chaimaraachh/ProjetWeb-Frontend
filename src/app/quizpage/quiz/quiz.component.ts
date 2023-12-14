import { Component, OnInit } from '@angular/core';
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

  quizForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({});
  }

  ngOnInit() {
    this.questions.forEach((question, index) => {
      this.quizForm.addControl('question' + index, this.fb.control(''));
    });
  }

  onSubmit() {
    console.log(this.quizForm.value);
    // Add logic to handle form submission here
  }

}
