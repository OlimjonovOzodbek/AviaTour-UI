import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashemailComponent } from './dashemail.component';

describe('DashemailComponent', () => {
  let component: DashemailComponent;
  let fixture: ComponentFixture<DashemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashemailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
