import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentContentComponent } from './comment-content.component';

describe('CommentContentComponent', () => {
  let component: CommentContentComponent;
  let fixture: ComponentFixture<CommentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
