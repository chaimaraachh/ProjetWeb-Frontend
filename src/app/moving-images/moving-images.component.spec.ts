import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingImagesComponent } from './moving-images.component';

describe('MovingImagesComponent', () => {
  let component: MovingImagesComponent;
  let fixture: ComponentFixture<MovingImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingImagesComponent]
    });
    fixture = TestBed.createComponent(MovingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
