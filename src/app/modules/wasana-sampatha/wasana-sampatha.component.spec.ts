import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasanaSampathaComponent } from './wasana-sampatha.component';

describe('WasanaSampathaComponent', () => {
  let component: WasanaSampathaComponent;
  let fixture: ComponentFixture<WasanaSampathaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasanaSampathaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasanaSampathaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
