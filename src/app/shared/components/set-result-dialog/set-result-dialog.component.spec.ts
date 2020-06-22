import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResultDialogComponent } from './set-result-dialog.component';

describe('SetResultDialogComponent', () => {
  let component: SetResultDialogComponent;
  let fixture: ComponentFixture<SetResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
