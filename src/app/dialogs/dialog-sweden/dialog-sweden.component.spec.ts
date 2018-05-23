import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSwedenComponent } from './dialog-sweden.component';

describe('DialogSwedenComponent', () => {
  let component: DialogSwedenComponent;
  let fixture: ComponentFixture<DialogSwedenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSwedenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSwedenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
