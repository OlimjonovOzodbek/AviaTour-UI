import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashadressComponent } from './dashadress.component';

describe('DashadressComponent', () => {
  let component: DashadressComponent;
  let fixture: ComponentFixture<DashadressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashadressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashadressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
