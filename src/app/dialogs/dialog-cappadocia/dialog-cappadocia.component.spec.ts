import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCappadociaComponent } from './dialog-cappadocia.component';

describe('DialogCappadociaComponent', () => {
  let component: DialogCappadociaComponent;
  let fixture: ComponentFixture<DialogCappadociaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCappadociaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCappadociaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
