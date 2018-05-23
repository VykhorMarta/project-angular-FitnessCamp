import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCroatiaComponent } from './dialog-croatia.component';

describe('DialogCroatiaComponent', () => {
  let component: DialogCroatiaComponent;
  let fixture: ComponentFixture<DialogCroatiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCroatiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCroatiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
