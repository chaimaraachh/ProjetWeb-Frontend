import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent implements OnInit {
  @Input() apiEndpoint: string="";
  @Output() deleteRow = new EventEmitter<any>();
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

}
