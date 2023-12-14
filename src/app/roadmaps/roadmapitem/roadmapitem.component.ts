import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roadmapitem',
  templateUrl: './roadmapitem.component.html',
  styleUrls: ['./roadmapitem.component.css']
})
export class RoadmapitemComponent {
  @Input()
  image!: string;
  @Input()
  name!: string;
}
