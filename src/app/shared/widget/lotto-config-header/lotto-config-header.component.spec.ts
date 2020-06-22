import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoConfigHeaderComponent } from './lotto-config-header.component';

describe('LottoConfigHeaderComponent', () => {
  let component: LottoConfigHeaderComponent;
  let fixture: ComponentFixture<LottoConfigHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoConfigHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoConfigHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
