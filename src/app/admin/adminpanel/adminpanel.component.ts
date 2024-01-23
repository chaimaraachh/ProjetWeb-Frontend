import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/config/config';
import { fields } from './fields';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  activeContent: string = '';
  apiEndpoint: string = '';
  fields = [{}];

  constructor() {}
  
  ngOnInit(): void {}

  showComponent(component: string) {
    if (component === 'getRoadmaps' || component === 'addRoadmap') {
      this.apiEndpoint = ApiUrl.roadmaps;
    } else if (component === 'getMilestones' || component === 'addMilestone') {
      this.apiEndpoint = ApiUrl.milestones;
    } else if (component === 'getQuestions' || component === 'addQuestion') {
      this.apiEndpoint = ApiUrl.questions;
    } else if (component === 'getQuizes') {
      this.apiEndpoint = ApiUrl.quiz;
    }else if (component === 'getUsers') {
      this.apiEndpoint = ApiUrl.user;
    } else { this.apiEndpoint = ''; }
    if (component === 'addRoadmap') {
      this.fields = fields.roadmap;
    } else if (component === 'addMilestone') {
      this.fields = fields.milestone ;
    } else if (component === 'addQuestion') {
      this.fields = fields.question;
    } else { 
      this.fields = [];
    }
    this.activeContent = component;
  }

  isContentActive(content: string): boolean {
    return this.activeContent === content;
  }
}
