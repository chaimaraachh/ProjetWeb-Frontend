import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoadmapserviceService } from '../roadmapservice.service';
import { Milestone } from '../milestone';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {
  milestones: Milestone[] = [];
  roadmapName: string = '';
  selectedMilestone: Milestone | null = null;
  roadmapProgress: number = 25;
  constructor(
    private roadmapService: RoadmapserviceService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const field = params['field'];
      this.roadmapName = field || 'Default Roadmap';
      this.roadmapService.setCurrentRoadmapType(field);
      this.milestones = this.roadmapService.getCurrentMilestones();
    });
  }

  goToMilestone(milestoneId: string): void {
    const milestone = this.roadmapService.getMilestone(milestoneId);
    if (milestone !== null) {
      this.selectedMilestone = milestone;
      console.log('Selected Milestone:', milestone);
    }
  }

  handleMilestoneSelected(selectedMilestone: any): void {
    console.log('Selected Milestone:', selectedMilestone);
  }
}
