import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDbComponent } from './add-to-db.component';

describe('AddToDbComponent', () => {
  let component: AddToDbComponent;
  let fixture: ComponentFixture<AddToDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToDbComponent]
    });
    fixture = TestBed.createComponent(AddToDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
