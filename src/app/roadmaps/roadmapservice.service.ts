import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Milestone } from './milestone';
import { DEVOPS_MILESTONES, AI_MILESTONES, DATA_SCIENCE_MILESTONES } from './milestonedata';

@Injectable({
  providedIn: 'root'
})
export class RoadmapserviceService {

  private milestoneSubject = new BehaviorSubject<Milestone | null>(null);
  currentMilestone = this.milestoneSubject.asObservable();
  private currentMilestones: Milestone[] = [];

  constructor() { }

  setCurrentRoadmapType(roadmapType: string) {
    switch (roadmapType) {
      case 'DevOps':
        this.currentMilestones = DEVOPS_MILESTONES;
        break;
      case 'AI':
        this.currentMilestones = AI_MILESTONES;
        break;
      case 'Data Science':
        this.currentMilestones = DATA_SCIENCE_MILESTONES;
        break;
      default:
        this.currentMilestones = [];
    }
  }

  changeMilestone(milestone: Milestone) {
    this.milestoneSubject.next(milestone);
  }

  getMilestone(id: string): Milestone | null {
    console.log(this.currentMilestone);
    return this.currentMilestones.find(m => m.id === id) || null;
  }

  getCurrentMilestones(): Milestone[] {
    return this.currentMilestones;
  }
}
