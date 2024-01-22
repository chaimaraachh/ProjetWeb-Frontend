import { Component, OnInit } from '@angular/core';
import { Roadmap } from 'src/app/roadmaps/roadmap';
import { AdminService } from '../admin.service';
import { ApiUrl } from 'src/app/config/config';

@Component({
  selector: 'app-addroadmap',
  templateUrl: './addroadmap.component.html',
  styleUrls: ['./addroadmap.component.css']
})
export class AddroadmapComponent implements OnInit {
  roadmap = new Roadmap();
  fields = [
    { name: 'title', label: 'Title', type: 'text', errorMessage: 'Title is required' },
    { name: 'description', label: 'Description', type: 'text', errorMessage: 'Description is required' },
    { name : 'domain', label : 'Domain', type : 'text', errorMessage : 'Domain is required'}
  ];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {}

  onSubmit(formData: any) {
    this.roadmap = { ...formData };
    this.addRoadmap();
  }

  addRoadmap() {
    this.adminService.post(ApiUrl.roadmaps, this.roadmap).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });
  }
}
