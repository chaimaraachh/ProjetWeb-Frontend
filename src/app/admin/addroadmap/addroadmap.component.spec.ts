import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroadmapComponent } from './addroadmap.component';

describe('AddroadmapComponent', () => {
  let component: AddroadmapComponent;
  let fixture: ComponentFixture<AddroadmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddroadmapComponent]
    });
    fixture = TestBed.createComponent(AddroadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
