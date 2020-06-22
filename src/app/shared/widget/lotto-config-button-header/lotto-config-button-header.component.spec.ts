import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoConfigButtonHeaderComponent } from './lotto-config-button-header.component';

describe('LottoConfigHeaderComponent', () => {
  let component: LottoConfigButtonHeaderComponent;
  let fixture: ComponentFixture<LottoConfigButtonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoConfigButtonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoConfigButtonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
