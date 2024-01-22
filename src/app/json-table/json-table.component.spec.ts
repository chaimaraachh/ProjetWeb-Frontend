import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTableComponent } from './json-table.component';

describe('JsonTableComponent', () => {
  let component: JsonTableComponent;
  let fixture: ComponentFixture<JsonTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonTableComponent]
    });
    fixture = TestBed.createComponent(JsonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
