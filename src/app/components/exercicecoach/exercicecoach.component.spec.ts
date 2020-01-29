import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicecoachComponent } from './exercicecoach.component';

describe('ExercicecoachComponent', () => {
  let component: ExercicecoachComponent;
  let fixture: ComponentFixture<ExercicecoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicecoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicecoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
