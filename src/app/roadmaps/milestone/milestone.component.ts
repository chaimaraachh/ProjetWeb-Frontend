import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoadmapserviceService } from '../roadmapservice.service';
import { Milestone } from '../milestone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent  {
  @Input() milestone: any;
  showDetails: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private roadmapService: RoadmapserviceService,
    private router: Router
  ) {}
  navigateToQuiz() {
    console.log(this.milestone.quizQuizID);
    this.router.navigate(['/quiz/' + this.milestone.quizQuizID]);
  }
  
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}