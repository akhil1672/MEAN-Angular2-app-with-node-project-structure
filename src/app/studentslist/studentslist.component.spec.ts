import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentslistComponent } from './studentslist.component';

describe('StudentslistComponent', () => {
  let component: StudentslistComponent;
  let fixture: ComponentFixture<StudentslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
