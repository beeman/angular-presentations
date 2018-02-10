import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-abstract-slide',
  template: `    
    <div class="slide">
      <h1 class="my-5" *ngIf="content.title">{{content.title}}</h1>
      <div class="my-5">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class AbstractSlideComponent {
  @Input() content
}
