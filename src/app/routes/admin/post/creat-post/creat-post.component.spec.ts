import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreatPostComponent} from './creat-post.component';

describe('CreatPostComponent', () => {
  let component: CreatPostComponent;
  let fixture: ComponentFixture<CreatPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
