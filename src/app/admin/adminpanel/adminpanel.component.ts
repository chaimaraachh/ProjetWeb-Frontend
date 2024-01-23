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
  //
  fields = [{}];


  //
  constructor() {}
  

  ngOnInit(): void {}

  showComponent(component: string) {
    if (component === 'getRoadmaps' || component === 'addRoadmap') {
      this.apiEndpoint = ApiUrl.roadmaps;
    } else if (component === 'getMilestones' || component === 'addMilestone') {
      this.apiEndpoint = ApiUrl.milestones;
    } else if (component === 'getQuestions' || component === 'addQuestion') {
      this.apiEndpoint = ApiUrl.questions;
    } else { this.apiEndpoint = ''; }
    if (component === 'addRoadmap') {
      this.fields = [
        { name: 'id', label: 'id', type: 'text', errorMessage: 'is is required' },
        { name: 'title', label: 'Title', type: 'text', errorMessage: 'Title is required' },
        { name: 'description', label: 'Description', type: 'text', errorMessage: 'Description is required' },
        { name : 'domain', label : 'Domain', type : 'text', errorMessage : 'Domain is required'}
      ];
    } else if (component === 'addMilestone') {
      this.fields = [
        { name: 'id', label: 'ID', type: 'text', errorMessage: 'ID is required' },
        { name: 'roadmapId', label: 'Roadmap ID', type: 'text', errorMessage: 'Roadmap ID is required' },
        { name: 'quizId', label: 'Quiz ID', type: 'number', errorMessage: 'Quiz ID is required' },
        { name: 'orderNumber', label: 'Order Number', type: 'number', errorMessage: 'Order Number is required' },
        { name: 'description', label: 'Description', type: 'text', errorMessage: 'Description is required' }
      ];
    } else if (component === 'addQuestion') {
      this.fields = [
        { name: 'testQuizId', label: 'Test Quiz', type: 'number', errorMessage: 'Test Quiz is required' },
        { name: 'content', label: 'Content', type: 'text', errorMessage: 'Content is required' },
        { name: 'option0', label: 'option0', type: 'text', errorMessage: 'Options are required' },
        { name: 'option1', label: 'option1', type: 'text', errorMessage: 'Options are required' },
        { name: 'option2', label: 'option2', type: 'text', errorMessage: 'Options are required' },
        { name: 'option3', label: 'option3', type: 'text', errorMessage: 'Options are required' },
        { name: 'correctOption', label: 'Correct Option', type: 'number', errorMessage: 'Correct Option is required' }
      ];
    } else { 
      this.fields = [];
    }
    this.activeContent = component;
  }

  isContentActive(content: string): boolean {
    return this.activeContent === content;
  }
}
