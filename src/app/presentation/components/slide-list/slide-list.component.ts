import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-slide-list',
  template: `
    <div class="slide">
      <h1 class="my-5">{{content.title}}</h1>
      <ul class="my-5">
        <li *ngFor="let item of content.items">{{item}}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class SlideListComponent {

  @Input() content

}
