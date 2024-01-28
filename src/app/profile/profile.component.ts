import { Component } from '@angular/core';
import { ProfileService } from './profileservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {};
  confirmPassword: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.profileService.getUserProfile().subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error('Error fetching user profile', error);
      }
    );
  }

  updateProfile() {
    // Check if passwords match
    if (this.user.password !== this.confirmPassword) {
      // Passwords don't match, display an error message or handle it as needed
      console.error('Passwords do not match');
      return;
    }
  
    // Passwords match, continue with the update
    this.profileService.updateUserProfile(this.user).subscribe(
      response => {
        // Handle the response, e.g., show a success message
        console.log('Profile updated successfully', response);
      },
      error => {
        console.error('Error updating user profile', error);
        // Handle the error, e.g., show an error message
      }
    );
  }
}