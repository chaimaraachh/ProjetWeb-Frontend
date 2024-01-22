import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ApiUrl} from 'src/app/config/config';
import { MilestoneClass } from 'src/app/roadmaps/milestone';

@Component({
  selector: 'app-addmilestone',
  templateUrl: './addmilestone.component.html',
  styleUrls: ['./addmilestone.component.css']
})
export class AddmilestoneComponent implements OnInit{
  milestone = new MilestoneClass();
  constructor(
    private adminService: AdminService
  ) { }
  ngOnInit(): void {
  }

  addMilestone() {
    //add milestone
    this.adminService.post(ApiUrl.milestones, this.milestone).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
    // add quiz associated with milestone
    this.adminService.post(ApiUrl.quiz, {"quizID": this.milestone.quiz.id, "title": this.milestone.quiz.id}).subscribe({
      next: (response) => {
      console.log(response);
    }, 
    error : (error) => {
      console.error(error);
    }
    });
  }

}
