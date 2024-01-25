export interface Milestone {
  id: string; // Changed from milestoneId to id
  description: string;
  orderNumber: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  validations: any[]; // Specify the type if you have a more specific one
  recommandedCertifications: any[]; // Same as above
  recommandedCourses: any[]; // Same as above
  quizId: number;
  roadmap: {
    id: string;
    title: string;
    domain: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}
export class MilestoneClass implements Milestone {
  id: string;
  description: string;
  orderNumber: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  validations: any[]; // Adjust the type as needed
  recommandedCertifications: any[]; // Adjust the type as needed
  recommandedCourses: any[]; // Adjust the type as needed
  quizId: number;

  roadmap: {
    id: string;
    title: string;
    domain: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };

  constructor() {
    this.id = '';
    this.description = '';
    this.orderNumber = 0;
    this.createdAt = '';
    this.updatedAt = '';
    this.deletedAt = null;
    this.validations = [];
    this.recommandedCertifications = [];
    this.recommandedCourses = [];
    this.quizId=0;
    this.roadmap = {
      id: '',
      title: '',
      domain: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      deletedAt: null
    };
  }
}
