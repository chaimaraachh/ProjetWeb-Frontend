import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiUrlQuestions } from '../config/config';
import { Question } from './question/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {



  constructor(
    private http: HttpClient) {}
/*
  getQuestions(): Observable<any> {
    return this.http.get(ApiUrlQuestions);
  }

  getQuestions(): Observable<any> {
    return this.http.get(ApiUrlQuestions).pipe(
      map(response => {
        if (typeof response === 'string') {
          return JSON.parse(response);
        }
        return response;
      })
    );
  }
  */
  getQuestions(quizId : string): Observable<Question[]> {
    return this.http.get<Question[]>(ApiUrlQuestions+"/by-quiz/"+quizId).pipe(
      map((questions: Question[]) => {
        return questions.map(question => {
          if (typeof question.options === 'string') {
            question.options = JSON.parse(question.options);
          }
          return question;
        });
      })
    );
  }
  
  

}
