import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringdashboardComponent } from './scoringdashboard.component';

describe('ScoringdashboardComponent', () => {
  let component: ScoringdashboardComponent;
  let fixture: ComponentFixture<ScoringdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoringdashboardComponent]
    });
    fixture = TestBed.createComponent(ScoringdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
