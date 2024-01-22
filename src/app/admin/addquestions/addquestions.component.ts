import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Question } from 'src/app/quizpage/question/question';
import { ApiUrl } from 'src/app/config/config';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent {
  question = new Question();
  fields = [
    { name: 'testQuiz', label: 'Test Quiz', type: 'text', errorMessage: 'Test Quiz is required' },
    { name: 'content', label: 'Content', type: 'text', errorMessage: 'Content is required' },
    { name: 'options', label: 'Options', type: 'text', errorMessage: 'Options are required' },
    { name: 'correctOption', label: 'Correct Option', type: 'number', errorMessage: 'Correct Option is required' }
  ];

  constructor(private adminService: AdminService) { }

  onSubmit(formData: any) {
    this.question = { ...formData };
    this.addQuestion();
  }

  addQuestion() {
    this.adminService.post(ApiUrl.questions, this.question).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });
  }

}
