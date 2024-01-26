import { Component, Input } from '@angular/core';
import { RoadmapserviceService } from '../roadmapservice.service';
import { AuthentificationService } from '../../authentication/services/authentification.service'; // Correct service import

@Component({
  selector: 'app-roadmapitem',
  templateUrl: './roadmapitem.component.html',
  styleUrls: ['./roadmapitem.component.css']
})
export class RoadmapitemComponent {
  @Input() name!: string;

  constructor(
    private roadmapService: RoadmapserviceService,
    private authService: AuthentificationService // Correct AuthService
  ) {}

  image!: string;

  ngOnInit() {
    this.image = 'assets/images/' + this.name + '.jpg';
  }

  subscribeToRoadmap() {
    if (this.authService.isAuthenticated()) {
      this.roadmapService.subscribeToRoadmap(this.name).subscribe({
        next: (response) => {
          console.log('Subscribed to roadmap:', response);
        },
        error: (error) => {
          console.error('Error subscribing to roadmap:', error);
        }
      });
    } else {
      console.error('User must be logged in to subscribe.');
    }
  }
  
  
}