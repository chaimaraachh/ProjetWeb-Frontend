import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ApiUrlMilestones, ApiUrlRoadmaps } from 'src/app/config/config';
import { MilestoneClass } from 'src/app/roadmaps/milestone';

@Component({
  selector: 'app-addmilestone',
  templateUrl: './addmilestone.component.html',
  styleUrls: ['./addmilestone.component.css']
})
export class AddmilestoneComponent implements OnInit{
  milestone = new MilestoneClass();
  constructor(
    private http: HttpClient,
    private adminService: AdminService
  ) { }
  ngOnInit(): void {
  }

  addMilestone() {
    this.adminService.post(ApiUrlMilestones, this.milestone).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

}
