import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Roadmap } from './roadmap.js'; 
import { ApiUrl } from '../config/config';
import { Milestone } from './milestone.js';

@Injectable({
  providedIn: 'root'
})
export class RoadmapserviceService {
  private roadmapSubject = new BehaviorSubject<Roadmap[] | null>(null);
  roadmaps$ = this.roadmapSubject.asObservable();
  
  constructor(private http: HttpClient) {
    this.loadRoadmaps(); 
  }

  private loadRoadmaps() {
    this.http.get<Roadmap[]>(ApiUrl.roadmaps)
      .subscribe(
        data => this.roadmapSubject.next(data),
        error => console.error('Error loading roadmaps:', error)
      );
  }

  getRoadmapById(id: string): Observable<Roadmap | null> {
    return this.http.get<Roadmap>(`${ApiUrl.roadmaps}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching roadmap:', error);
        return of(null);
      })
    );
  }
  

  getMilestone(roadmapId: string, milestoneId: string): Milestone | null {
    const roadmap = this.roadmapSubject.getValue()?.find(r => r.id === roadmapId);
    return roadmap?.milestones.find(m => m.id === milestoneId) || null;
  }

  getAllRoadmaps(): Observable<Roadmap[]> {
    return this.http.get<Roadmap[]>(ApiUrl.roadmaps); 
  }

  getMilestonesByRoadmap(roadmapId: string): Observable<Milestone[]> {
    return this.http.get<Milestone[]>(`${ApiUrl.milestones}/byRoadmap/${roadmapId}`);
  }
}
