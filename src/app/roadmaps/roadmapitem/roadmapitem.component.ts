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

  // Move the image URL construction into the ngOnInit lifecycle hook
  image!: string;

  ngOnInit() {
    this.image = 'assets/images/' + this.name + '.jpg';
  }

  subscribeToRoadmap() {
    // You can use 'this.name' directly in the method
    const userId = this.authService.getCurrentUserId();
    
    if (userId) {
      this.roadmapService.subscribeToRoadmap(userId, this.name).subscribe({
        next: (response) => {
          console.log('Subscribed to roadmap:', response);
          // Implement additional logic upon success
        },
        error: (error) => {
          console.error('Error subscribing to roadmap:', error);
          // Implement error handling logic
        }
      });
    } else {
      console.error('User ID not available for subscription.');
      // Implement logic for when the user ID is not available
    }
  }
}