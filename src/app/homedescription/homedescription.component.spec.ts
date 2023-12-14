import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedescriptionComponent } from './homedescription.component';

describe('HomedescriptionComponent', () => {
  let component: HomedescriptionComponent;
  let fixture: ComponentFixture<HomedescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedescriptionComponent]
    });
    fixture = TestBed.createComponent(HomedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
