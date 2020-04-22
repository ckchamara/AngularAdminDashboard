import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JathikaSampathaComponent } from './jathika-sampatha.component';

describe('JathikaSampathaComponent', () => {
  let component: JathikaSampathaComponent;
  let fixture: ComponentFixture<JathikaSampathaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JathikaSampathaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JathikaSampathaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
