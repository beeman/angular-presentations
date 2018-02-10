import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-slide',
  template: `
    <app-slide-code *ngIf="slide.type === 'code'" [content]="slide.content"></app-slide-code>
    <app-slide-html *ngIf="slide.type === 'html'" [content]="slide.content"></app-slide-html>
    <app-slide-image *ngIf="slide.type === 'image'" [content]="slide.content"></app-slide-image>
    <app-slide-list *ngIf="slide.type === 'list'" [content]="slide.content"></app-slide-list>
    <app-slide-title *ngIf="slide.type === 'title'" [content]="slide.content"></app-slide-title>
    <app-slide-youtube *ngIf="slide.type === 'youtube'" [content]="slide.content"></app-slide-youtube>
    <div *ngIf="unknown(slide.type)" class="slide">
      <h1>Unknown slide type: </h1>
      <pre>{{slide | json}}</pre>
    </div>
  `,
})
export class SlideComponent {

  @Input() slide: any
  @Input() slideTypes: string[]

  unknown(type: string) {
    return !this.slideTypes.find(t => t === type)
  }
}
