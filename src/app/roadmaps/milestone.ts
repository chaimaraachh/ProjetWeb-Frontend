export interface Milestone {
  milestoneId: string;
  passed: boolean;
  score: number;
  title: string;
  description: string;
  orderNumber: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export class MilestoneClass implements Milestone {
  milestoneId: string;
  passed: boolean;
  score: number;
  title: string;
  description: string;
  orderNumber: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  roadmapRoadmapID: string;
  quizQuizID: string;

  constructor() {
    // Initialize all properties with default values
    this.milestoneId = '';
    this.passed = false;
    this.score = 0;
    this.title = '';
    this.description = '';
    this.orderNumber = 0;
    this.createdAt = '';
    this.updatedAt = '';
    this.deletedAt = null;
    this.roadmapRoadmapID = '';
    this.quizQuizID = '';
  }
}
