import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Milestone } from '../milestone';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent {
  @Input()
  milestone!: Milestone; 
  showDetails: boolean = false;

  constructor(private router: Router) {}

  navigateToQuiz() {
    if (this.milestone.quiz && this.milestone.quiz.id) {
      console.log(this.milestone.quiz.id);
      this.router.navigate(['/quiz/' + this.milestone.quiz.id]);
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
