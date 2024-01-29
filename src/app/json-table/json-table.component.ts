import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent implements OnInit {
  @Input() apiEndpoint: string="";
  @Output() deletionCompleted = new EventEmitter<void>();

  jsonData: any[]= [];
  constructor(private apiService: ApiServiceService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getData();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['apiEndpoint'] && changes['apiEndpoint'].currentValue !== changes['apiEndpoint'].previousValue) {
      // apiEndpoint input has changed
      this.getData(); // Fetch new data based on the updated apiEndpoint
    }
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
    if (confirm('Are you sure you want to delete this row?')) {
      this.apiService.delete(this.apiEndpoint + '/' + row['id']).subscribe({
        next: (response: any) => {
          const index = this.jsonData.indexOf(row);
          if (index > -1) {
            this.jsonData.splice(index, 1);
            // Optionally trigger change detection
            this.cd.detectChanges();
            this.deletionCompleted.emit();
          }
        },
        error: (error: any) => {
          console.error('API error:', error);
        }
      });
    }
  }
  
  softDeleteRow(row: any): void {
    this.apiService.delete(this.apiEndpoint + '/soft/' + row['id']).subscribe({
      next: (response: any) => {
        const index = this.jsonData.indexOf(row);
        if (index > -1) {
          this.jsonData.splice(index, 1);
          // Optionally trigger change detection
          this.cd.detectChanges();
          this.deletionCompleted.emit();
        }
      },
      error: (error: any) => {
          console.error('API error:', error);
      }
    });
  }
  


}
