import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentication/services/authentification.service';
import { QuizComponent } from '../quizpage/quiz/quiz.component';

@Injectable({
  providedIn: 'root',
})
export class QuizGuard implements CanActivate, CanDeactivate<QuizComponent> {
  constructor(private authService: AuthentificationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return !!this.authService.isAuthenticated();
  }

  canDeactivate(
        component: QuizComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
      ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        //if there is no remaining time, allow navigation
        if (component.remainingTime <= 0) {
                alert('time is up! Your quiz will be submitted.')
                return true;
        }
        else //if there is remaining time, ask the user if they want to leave
        {
                if (confirm('Are you sure you want to leave this page? Your quiz will be submitted.')) {
                        component.submitQuiz(); // Submit the quiz
                        return true;
                      }
                return false; // Prevent navigation if they choose not to leave
        }
      }
}

