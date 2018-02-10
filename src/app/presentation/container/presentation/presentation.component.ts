import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { SlidesService } from '../../services/slides.service'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-presentation',
  template: `
    <div class="container vh-75">
      <app-slide *ngIf="slides[slideId]" [slide]="slides[slideId]" [slideTypes]="slideTypes"></app-slide>
    </div>
    <div class="counter fixed-bottom text-right px-3">
      <span class="debug" *ngIf="false">
        slideId {{slideId}}
        total {{total}}
        prev: {{getPrevious()}}
        next: {{getNext()}}
      </span>
      <button class="btn btn-sm btn-primary" (click)="goPrevious()" [class.disabled]="!hasPrevious()"> << </button>
      <button class="btn btn-sm btn-secondary btn-disabled">
        {{getCurrent() + 1}} / {{total}}
      </button>
      <button class="btn btn-sm btn-primary" (click)="goNext()" [class.disabled]="!hasNext()"> >> </button>
    </div>
  `,
  styles: [`
    .counter {
      margin-bottom: 4rem !important;
    }
  `]
})
export class PresentationComponent implements OnInit {

  public slides: any[] = []
  public slideId: any = 0;
  public slideTypes: string[];
  public total: any = 0;

  constructor(private slidesService: SlidesService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.slideTypes = this.slidesService.getSlideTypes()
    this.slidesService.getSlides()
      .subscribe(res => this.slides = res)
      .add(() => this.updateCounters())

    this.route.params
      .map(res => res['slideId'])
      .subscribe((slideId: number) => {
        if  (!slideId) {
          return this.goTo(0)
        }
        this.slideId = slideId
        this.updateCounters()
      })

    Observable
      .fromEvent(document, 'keyup')
      .map(res => res['key'])
      .subscribe((key) => {
        if (key === 'ArrowRight' || key === 'ArrowDown') {
          this.goNext()
        }
        if (key === 'ArrowLeft' || key === 'ArrowUp') {
          this.goPrevious()
        }
      })
  }

  updateCounters() {
    this.total = this.slides.length;
  }

  goTo(slideId) {
    return this.router.navigate(['/presentation', slideId])
  }

  hasNext() {
    return !!this.slides[this.getNext()]
  }

  hasPrevious() {
    return !!this.slides[this.getPrevious()]
  }

  getCurrent(): number {
    return parseInt(this.slideId, 10)
  }

  getNext(): number {
    return this.getCurrent() + 1
  }

  getPrevious(): number {
    return this.getCurrent() - 1
  }

  goNext() {
    if (this.hasNext()) {
      return this.goTo(this.getNext())
    }
  }
  goPrevious() {
    if (this.hasPrevious()) {
      return this.goTo(this.getPrevious())
    }
  }
}
