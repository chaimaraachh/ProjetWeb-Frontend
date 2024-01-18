import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmilestoneComponent } from './addmilestone.component';

describe('AddmilestoneComponent', () => {
  let component: AddmilestoneComponent;
  let fixture: ComponentFixture<AddmilestoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmilestoneComponent]
    });
    fixture = TestBed.createComponent(AddmilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
