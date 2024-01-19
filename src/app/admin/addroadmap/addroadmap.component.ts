import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/config/config';
import { Roadmap } from 'src/app/roadmaps/roadmap';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addroadmap',
  templateUrl: './addroadmap.component.html',
  styleUrls: ['./addroadmap.component.css']
})
export class AddroadmapComponent implements OnInit{
  roadmap = new Roadmap();
  constructor(
    private http: HttpClient,
    private adminService: AdminService
  ) { }
  ngOnInit(): void {
  }

  addRoadmap() {
    this.adminService.post(ApiUrl.roadmaps, this.roadmap).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });    
  }

}
