import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendApiUrl } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient,

  ) { }
  login( email: string, password: string){
    return this.http.post<any>(backendApiUrl, {"email":email,  "password":password} )
  }
}
