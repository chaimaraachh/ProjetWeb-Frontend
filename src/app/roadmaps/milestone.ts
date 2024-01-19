export interface Milestone {
    id: string;
    title: string;
    description: string;
    courseLink: string;
    certificationSuggestion: string;
  }

export class MilestoneClass {
  milestoneId: string;
  roadmapRoadmapID: string
  quizQuizID: string;
  title: string;
  description: string;
  orderNumber: number;
  constructor() {
    this.milestoneId = '';
    this.roadmapRoadmapID = '';
    this.title = '';
    this.description = '';
    this.quizQuizID = '';
    this.orderNumber = 0;
  }
}