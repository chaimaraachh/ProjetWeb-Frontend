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
  activeComponent: string = '';

  
  showComponent(component: string) {
    // set api endpoint
    switch (component) {
      case 'getRoadmaps':
      case 'addRoadmap':
        this.apiEndpoint = ApiUrl.roadmaps;
        break;
      case 'getMilestones':
      case 'addMilestone':
        this.apiEndpoint = ApiUrl.milestones;
        break;
      case 'getQuestions':
      case 'addQuestion':
        this.apiEndpoint = ApiUrl.questions;
        break;
      case 'getQuizes':
        this.apiEndpoint = ApiUrl.quiz;
        break;
      case 'getUsers':
        this.apiEndpoint = ApiUrl.user;
        break;
      case 'addAdmin':
        this.apiEndpoint = ApiUrl.signup;
        break;
      default:
        this.apiEndpoint = '';
    }
    
    // set fields
    switch (component) {
      case 'addRoadmap':
        this.fields = fields.roadmap;
        break;
      case 'addMilestone':
        this.fields = fields.milestone;
        break;
      case 'addQuestion':
        this.fields = fields.question;
        break;
      case 'addAdmin':
        this.fields = fields.admin;
        break;
      default:
        this.fields = [];
    }
    this.activeContent = component;
    this.activeComponent = component;

  }

  isContentActive(content: string): boolean {
    return this.activeContent === content;
  }

  
}
