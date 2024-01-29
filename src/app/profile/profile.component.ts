import { Component } from '@angular/core';
import { ProfileService } from './profileservice.service';
import { AuthentificationService } from '../authentication/services/authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {};
  confirmPassword: any;

  constructor(private profileService: ProfileService,public authentificationService: AuthentificationService
    ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  currentView = 'editProfile';


  navigateTo(view: string) {
    this.currentView = view;
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
    if (this.user.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    this.profileService.updateUserProfile(this.user).subscribe(
      response => {
        console.log('Profile updated successfully', response);
      },
      error => {
        console.error('Error updating user profile', error);
      }
    );
  }

  logout(){
    this.authentificationService.logout();
  }
}