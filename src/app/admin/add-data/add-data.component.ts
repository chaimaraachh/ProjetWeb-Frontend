import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  @Input() fields: any[]=[];
  @Output() onSubmit = new EventEmitter<any>();
  @Input() apiEndpoint: string="";
  constructor(
    private apiservice : ApiServiceService
  ) { }
  formData: any = {};
  
  submitForm() {
    console.log(this.apiEndpoint);
    
    if(this.apiEndpoint === 'http://localhost:3000/questions') {
      this.formData = {
        testQuizId: parseInt(this.formData.testQuizId),
        content: this.formData.content,
        options:[this.formData.option0,this.formData.option1,
          this.formData.option2,this.formData.option3,
        ],
        correctOption: parseInt(this.formData.correctOption)
      };
    }
    console.log(this.formData);
    this.apiservice.post(this.apiEndpoint, this.formData).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

}
