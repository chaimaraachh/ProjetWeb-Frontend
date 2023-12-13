import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonelistComponent } from './milestonelist.component';

describe('MilestonelistComponent', () => {
  let component: MilestonelistComponent;
  let fixture: ComponentFixture<MilestonelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilestonelistComponent]
    });
    fixture = TestBed.createComponent(MilestonelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
