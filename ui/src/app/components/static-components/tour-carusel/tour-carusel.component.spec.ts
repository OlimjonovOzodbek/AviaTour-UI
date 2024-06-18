import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCaruselComponent } from './tour-carusel.component';

describe('TourCaruselComponent', () => {
  let component: TourCaruselComponent;
  let fixture: ComponentFixture<TourCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourCaruselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
