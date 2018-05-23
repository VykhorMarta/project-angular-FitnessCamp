import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSloveniaComponent } from './dialog-slovenia.component';

describe('DialogSloveniaComponent', () => {
  let component: DialogSloveniaComponent;
  let fixture: ComponentFixture<DialogSloveniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSloveniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSloveniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
