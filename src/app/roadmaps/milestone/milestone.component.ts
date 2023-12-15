import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoadmapserviceService } from '../roadmapservice.service';
import { Milestone } from '../milestone';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent  {
  @Input() milestone: any;
  showDetails: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private roadmapService: RoadmapserviceService
  ) {}


  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}