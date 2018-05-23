import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAustriaComponent } from './dialog-austria.component';

describe('DialogAustriaComponent', () => {
  let component: DialogAustriaComponent;
  let fixture: ComponentFixture<DialogAustriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAustriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
