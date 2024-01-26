import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent implements OnInit {
  @Input() apiEndpoint: string="";
  jsonData: any[]= [];
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    if (this.apiEndpoint) {
      this.apiService.get(this.apiEndpoint).subscribe({
        next: (response: any) => {
          this.jsonData = response;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }

  getColumnHeaders(): string[] {
    if (!this.jsonData || this.jsonData.length === 0) {
      return [];
    }
    return Object.keys(this.jsonData[0]);
  }

  deleteRow(row: any): void {
    if (!confirm('Are you sure you want to delete this row?')){
    this.apiService.delete(this.apiEndpoint+'/'+row['id']).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  return;
  }

  softDeleteRow(row: any): void {
    this.apiService.delete(this.apiEndpoint+'/soft/'+row['id']).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }


}
