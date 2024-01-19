import { Component } from '@angular/core';
import { AuthentificationService } from '../authentication/services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(
  private authentificationService: AuthentificationService
  ) 
  { };

  logout(){
    this.authentificationService.logout();
  }
}
