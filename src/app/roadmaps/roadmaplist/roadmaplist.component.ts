import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roadmaplist',
  templateUrl: './roadmaplist.component.html',
  styleUrls: ['./roadmaplist.component.css']
})
export class RoadmaplistComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

}
