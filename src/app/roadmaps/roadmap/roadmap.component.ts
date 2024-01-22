import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoadmapserviceService } from '../roadmapservice.service';
import { Roadmap} from '.././roadmap.js'; 
import { Milestone } from '.././milestone.js';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {
  milestones: Milestone[] = [];
  roadmap: Roadmap | null = null;
  selectedMilestone: Milestone | null = null;
  roadmapProgress: number = 25;

  constructor(
    private roadmapService: RoadmapserviceService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const roadmapId = params['roadmapId'];
      if (roadmapId) {
        this.roadmapService.getRoadmapById(roadmapId).subscribe(
          roadmap => {
            this.roadmap = roadmap;
            console.log('Roadmap:', roadmap);
            if (roadmap) {
              this.roadmapService.getMilestonesByRoadmap(roadmapId).subscribe(
                milestones => {
                  this.milestones = milestones;
                  console.log('Milestones:', milestones);
                },
                error => console.error('Error fetching milestones:', error)
              );
            }
          },
          error => console.error('Error fetching roadmap:', error)
        );
      } 
    });
  }
  
  
  

  goToMilestone(milestoneId: string): void {
    if (this.roadmap) {
      const milestone = this.roadmap.milestones.find(m => m.id === milestoneId);
      if (milestone) {
        this.selectedMilestone = milestone;
        console.log('Selected Milestone:', milestone);
      }
    }
  }

  handleMilestoneSelected(selectedMilestone: Milestone): void {
    console.log('Selected Milestone:', selectedMilestone);
  }
}
