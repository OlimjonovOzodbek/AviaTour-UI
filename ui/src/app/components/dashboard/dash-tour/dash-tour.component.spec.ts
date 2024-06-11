import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTourComponent } from './dash-tour.component';

describe('DashTourComponent', () => {
  let component: DashTourComponent;
  let fixture: ComponentFixture<DashTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashTourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
