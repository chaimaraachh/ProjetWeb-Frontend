import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuardService {
  canDeactivate(): boolean {
    // Replace with your logic to determine if it's safe to leave the page
    return confirm('Are you sure you want to leave? Your progress may be lost.');
  }
}
