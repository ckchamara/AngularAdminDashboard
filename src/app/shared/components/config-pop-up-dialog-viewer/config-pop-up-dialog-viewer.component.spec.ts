import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPopUpDialogViewerComponent } from './config-pop-up-dialog-viewer.component';

describe('ConfigPopUpDialogViewerComponent', () => {
  let component: ConfigPopUpDialogViewerComponent;
  let fixture: ComponentFixture<ConfigPopUpDialogViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPopUpDialogViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPopUpDialogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
