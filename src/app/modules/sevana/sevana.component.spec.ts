import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevanaComponent } from './sevana.component';

describe('SevanaComponent', () => {
  let component: SevanaComponent;
  let fixture: ComponentFixture<SevanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
