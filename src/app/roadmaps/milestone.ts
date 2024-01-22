export interface Milestone {
    id: string;
    title: string;
    description: string;
    courseLink: string;
    certificationSuggestion: string;
    quizQuizID: number;
  }

export class MilestoneClass {
  id: string;
  roadmapid: string
  quizQuizID: number;
  title: string;
  description: string;
  orderNumber: number;
  constructor() {
    this.id = '';
    this.roadmapid = '';
    this.title = '';
    this.description = '';
    this.quizQuizID = 0;
    this.orderNumber = 0;
  }
}