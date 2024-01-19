import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  constructor(
    private router: Router,
  ) { }

  navigateToAddRoadmap() {
    this.router.navigate(['/addroadmap']);
  }

  nagivateToAddMilestone() {
    this.router.navigate(['/addmilestone']);
  }

  nagivateToAddQuestion() {
    this.router.navigate(['/addquestion']);
  }
}
