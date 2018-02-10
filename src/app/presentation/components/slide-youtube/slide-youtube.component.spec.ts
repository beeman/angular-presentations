import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideYoutubeComponent } from './slide-youtube.component';

describe('SlideYoutubeComponent', () => {
  let component: SlideYoutubeComponent;
  let fixture: ComponentFixture<SlideYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
