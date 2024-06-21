import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcontactComponent } from './dashcontact.component';

describe('DashcontactComponent', () => {
  let component: DashcontactComponent;
  let fixture: ComponentFixture<DashcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashcontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
