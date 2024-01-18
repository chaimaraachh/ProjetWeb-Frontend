import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlLogin } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient,

  ) { }
  login( email: string, password: string){
    return this.http.post<any>(ApiUrlLogin, {"email":email,  "password":password} )
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

}
