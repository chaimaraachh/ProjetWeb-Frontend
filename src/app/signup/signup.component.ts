import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../services/country.service';

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
  ) { }
  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data.filter(country => country.name.common !== "Afghanistan");
      this.countries = data.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });
      console.log(this.countries);
    });
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  singUp(signUpForm: { value: any; }) {
    alert(signUpForm.value);
  }
}
