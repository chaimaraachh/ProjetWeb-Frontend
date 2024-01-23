import { CanActivateFn } from '@angular/router';

export const quizGuard: CanActivateFn = (route, state) => {
  return true;
};

