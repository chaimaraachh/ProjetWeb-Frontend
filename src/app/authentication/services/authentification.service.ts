import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../../config/config';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient,

  ) { }
  login( email: string, password: string){
    return this.http.post<any>(ApiUrl.login, {"email":email,  "password":password} )
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  getCurrentUserId(): number | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.userId; 
      } catch (error) {
        console.error('Error decoding token: ', error);
        return null;
      }
    }
    return null;
  }
}

