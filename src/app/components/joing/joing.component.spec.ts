import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoingComponent } from './joing.component';

describe('JoingComponent', () => {
  let component: JoingComponent;
  let fixture: ComponentFixture<JoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
