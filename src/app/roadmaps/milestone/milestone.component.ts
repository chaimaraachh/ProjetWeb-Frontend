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
    console.log(this.milestone);

    if (this.milestone.quizId) {
      this.router.navigate(['/quiz/' + this.milestone.quizId]);
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
