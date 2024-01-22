import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/config/config';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  activeContent: string = '';
  apiEndpoint: string = '';
  constructor() {}

  ngOnInit(): void {}

  showComponent(component: string) {
    if (component === 'getRoadmaps') {
      this.apiEndpoint = ApiUrl.roadmaps;
    } else if (component === 'getMilestones') {
      this.apiEndpoint = ApiUrl.milestones;
    } else if (component === 'getQuestions') {
      this.apiEndpoint = ApiUrl.questions;
    } else { this.apiEndpoint = ''; }
    this.activeContent = component;
  }

  isContentActive(content: string): boolean {
    return this.activeContent === content;
  }
}
