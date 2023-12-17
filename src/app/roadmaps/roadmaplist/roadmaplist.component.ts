import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roadmaplist',
  templateUrl: './roadmaplist.component.html',
  styleUrls: ['./roadmaplist.component.css']
})
export class RoadmaplistComponent {
  private imagePath = 'src/assets/images/';

  roadmaps = [
    { id: 1, name: 'DevOps', image: 'assets/images/devops.jpg' },
    { id: 2, name: 'AI', image: 'assets/images/ai.jpg' },
    { id: 3, name: 'Data Science', image: 'assets/images/data.jpg' },
    { id: 4, name: 'DevOps', image: 'assets/images/devops.jpg' }
  ];
  constructor(private router: Router) {}

  navigateToRoadmap(roadmapName: string): void {
    this.router.navigate(['/roadmap'], { queryParams: { field: roadmapName } });
  }
}
