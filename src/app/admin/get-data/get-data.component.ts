import { Component, Input, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/config/config';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit{
  constructor(private apiservice : ApiServiceService ) { }
  @Input() apiEndpoint: string="";

  ngOnInit(): void { 
    console.log("get data component");
    this.getRoadmaps(); 
   }

   JsonData = [];

  getRoadmaps() {
    // get roadmaps
    this.apiservice.get(ApiUrl.roadmaps).subscribe({
      next: (response: any) => { 
        console.log("response");
        this.JsonData = response;
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  deleteRow(row: any): void {
    console.log('Deleting row:', row);
  }

}
