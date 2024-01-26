import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { ApiUrl } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class DahsboardserviceService {
  constructor(private http: HttpClient) {}


  getUsersWithTotalScores(): Observable<any[]> {
    return this.getUsers().pipe(
      map(users => users.map(user => this.getTotalScore(user.id).pipe(
        map(score => ({ ...user, totalScore: score }))
      ))),
      switchMap(observables => forkJoin(observables))
    );
  }

  private getUsers(): Observable<any[]> {
    const headers = this.createAuthHeaders();
    return this.http.get<any[]>(ApiUrl.user, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]);
      })
    );
  }

  private getTotalScore(userId: number): Observable<number> {
    const headers = this.createAuthHeaders();
    return this.http.get<number>(`${ApiUrl.user}/${userId}/totalscore`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching total score:', error);
        return of(0);
      })
    );
  }

  private createAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}