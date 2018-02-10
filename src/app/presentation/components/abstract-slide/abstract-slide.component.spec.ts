import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractSlideComponent } from './abstract-slide.component';

describe('AbstractSlideComponent', () => {
  let component: AbstractSlideComponent;
  let fixture: ComponentFixture<AbstractSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
