import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDashTourComponent } from './single-dash-tour.component';

describe('SingleDashTourComponent', () => {
  let component: SingleDashTourComponent;
  let fixture: ComponentFixture<SingleDashTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleDashTourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleDashTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
