import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../services/country.service';
import { NgForm } from '@angular/forms';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  countries: any[] = [];
  selectedCountry: string = '';
  constructor(
    private router: Router,
    private countryService: CountryService,
    private signUpService: SignupService
  ) { }
  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {

      this.countries = data.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });

    });
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  singUp(signUpForm:NgForm) {
    console.log(signUpForm.value);
    this.signUpService.signup(signUpForm.value).subscribe(
      (response) => {
        alert('Vous êtes signé');
        console.log(response);
      },
      (error) => {
        alert(error.error.message);
        console.log(error);
      }
    )
  }
}
