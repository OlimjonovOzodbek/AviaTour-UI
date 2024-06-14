import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCommentComponent } from './dash-comment.component';

describe('DashCommentComponent', () => {
  let component: DashCommentComponent;
  let fixture: ComponentFixture<DashCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
