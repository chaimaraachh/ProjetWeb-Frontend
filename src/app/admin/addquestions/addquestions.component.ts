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
  constructor(
    private adminService: AdminService
  ) { }
  ngOnInit(): void {
  }

  addQuestion() {
    this.adminService.post(ApiUrl.questions, this.question).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
