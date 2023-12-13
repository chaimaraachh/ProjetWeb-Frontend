import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonedetailsComponent } from './milestonedetails.component';

describe('MilestonedetailsComponent', () => {
  let component: MilestonedetailsComponent;
  let fixture: ComponentFixture<MilestonedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilestonedetailsComponent]
    });
    fixture = TestBed.createComponent(MilestonedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
