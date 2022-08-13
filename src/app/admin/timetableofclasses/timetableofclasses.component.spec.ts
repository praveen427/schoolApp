import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableofclassesComponent } from './timetableofclasses.component';

describe('TimetableofclassesComponent', () => {
  let component: TimetableofclassesComponent;
  let fixture: ComponentFixture<TimetableofclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableofclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableofclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
