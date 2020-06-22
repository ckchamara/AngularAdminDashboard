import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConfigDialogComponent } from './set-config-dialog.component';

describe('ConfigDialogComponent', () => {
  let component: SetConfigDialogComponent;
  let fixture: ComponentFixture<SetConfigDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
