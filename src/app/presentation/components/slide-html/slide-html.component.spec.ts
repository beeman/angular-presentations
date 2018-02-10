import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideHtmlComponent } from './slide-html.component';

describe('SlideHtmlComponent', () => {
  let component: SlideHtmlComponent;
  let fixture: ComponentFixture<SlideHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
