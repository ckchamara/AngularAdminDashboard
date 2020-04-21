import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovisethaComponent } from './govisetha.component';

describe('GovisethaComponent', () => {
  let component: GovisethaComponent;
  let fixture: ComponentFixture<GovisethaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovisethaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovisethaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
