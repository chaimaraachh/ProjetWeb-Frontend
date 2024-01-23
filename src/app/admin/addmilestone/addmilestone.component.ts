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
  fields = [
    { name: 'id', label: 'ID', type: 'text', errorMessage: 'ID is required' },
    { name: 'roadmapid', label: 'Roadmap ID', type: 'text', errorMessage: 'Roadmap ID is required' },
    { name: 'quizQuizID', label: 'Quiz ID', type: 'text', errorMessage: 'Quiz ID is required' },
    { name: 'title', label: 'Title', type: 'text', errorMessage: 'Title is required' },
    { name: 'orderNumber', label: 'Order Number', type: 'number', errorMessage: 'Order Number is required' },
    { name: 'description', label: 'Description', type: 'text', errorMessage: 'Description is required' }
  ];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    
  }
  onSubmit(formData: any) {
    this.milestone = { ...formData };
    this.addMilestone();
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
