import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCodeComponent } from './slide-code.component';

describe('SlideCodeComponent', () => {
  let component: SlideCodeComponent;
  let fixture: ComponentFixture<SlideCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
