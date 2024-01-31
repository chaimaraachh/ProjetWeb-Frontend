import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../services/country.service';
import { NgForm } from '@angular/forms';
import { SignupService } from './services/signup.service';
import { ToastrService } from 'ngx-toastr';

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
    private signUpService: SignupService,
    private toastr: ToastrService
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
    this.signUpService.signup(signUpForm.value).subscribe({
      next: (response) => {
        this.toastr.success('You have successfully signed up', 'Success');
        this.router.navigate(['../login']);
      },
      error : (error) => {
        this.toastr.error(error.error.message, 'Error');
      }
      }
      );
  }
}
