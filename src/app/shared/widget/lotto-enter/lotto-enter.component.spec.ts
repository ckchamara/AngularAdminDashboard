import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoEnterComponent } from './lotto-enter.component';

describe('LottoEnterComponent', () => {
  let component: LottoEnterComponent;
  let fixture: ComponentFixture<LottoEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
