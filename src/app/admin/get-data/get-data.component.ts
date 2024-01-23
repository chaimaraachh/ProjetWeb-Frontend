import { Component, Input, OnInit } from '@angular/core';
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
   }

   JsonData = [];
   deleteurlString = '';
  deleteRow(row: any): void {
    if (row['id'] == undefined)
    {
      this.deleteurlString =this.apiEndpoint+'/'+row['questionID'];
    }
    else
    {
      this.deleteurlString =this.apiEndpoint+'/'+row['id'];
    }
    this.apiservice.delete(this.deleteurlString).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
