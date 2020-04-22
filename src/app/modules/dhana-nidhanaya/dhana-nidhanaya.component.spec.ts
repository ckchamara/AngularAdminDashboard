import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhanaNidhanayaComponent } from './dhana-nidhanaya.component';

describe('DhanaNidhanayaComponent', () => {
  let component: DhanaNidhanayaComponent;
  let fixture: ComponentFixture<DhanaNidhanayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhanaNidhanayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhanaNidhanayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
