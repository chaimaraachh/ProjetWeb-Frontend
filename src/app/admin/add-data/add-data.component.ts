import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiUrl } from 'src/app/config/config';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  @Input() fields: any[]=[];
  @Output() onSubmit = new EventEmitter<any>();
  @Input() apiEndpoint: string="";
  @Input() fromType: string="";
  apiUpdateEndpoint: string="";
  constructor(
    private apiservice : ApiServiceService,
  ) { }
  formData: any = {};
  
  ngOnInit(): void {
    if (this.apiEndpoint === ApiUrl.milestones) {
      this.loadDropdownOptions(ApiUrl.roadmaps);
    } else if (this.apiEndpoint === ApiUrl.questions) {
      this.loadDropdownOptions(ApiUrl.milestones);
    }
  }
  handleNumberConversion() {
    for (const field of this.fields) {
      if (field.type === 'number' && this.formData.hasOwnProperty(field.name)) {
        this.formData[field.name] = Number(this.formData[field.name]);
      }
    }  
  }

submitForm() {   
    this.handleNumberConversion();
    console.log(this.formData);
    
    if(this.apiEndpoint === ApiUrl.questions) {
      this.formData = {
        testQuizId: this.formData.testQuizId,
        content: this.formData.content,
        options:[this.formData.option0,this.formData.option1,
          this.formData.option2,this.formData.option3,
        ],
        correctOption: parseInt(this.formData.correctOption)
      };
    }
    
    if (this.fromType === 'add') {
      this.apiservice.post(this.apiEndpoint, this.formData).subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  } else if (this.fromType === 'update') {
    this.apiUpdateEndpoint = this.apiEndpoint+'/'+this.formData.id;
    delete this.formData.id
    console.log("hi");
    
    console.log(this.apiUpdateEndpoint);
    console.log(this.formData);
    
    this.apiservice.patch(this.apiUpdateEndpoint, this.formData).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}

  loadDropdownOptions(url: string) {
    const dropdownField = this.fields.find(f => f.type === 'dropdown');
    this.apiservice.get(url).subscribe({
      next: (response: any) => {
        console.log(response);
        dropdownField.options = response.map((r: any) => {
          return { value: r.id, text: r.id };
        });
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
