import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahajanaSampathaComponent } from './mahajana-sampatha.component';

describe('MahajanaSampathaComponent', () => {
  let component: MahajanaSampathaComponent;
  let fixture: ComponentFixture<MahajanaSampathaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahajanaSampathaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahajanaSampathaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
