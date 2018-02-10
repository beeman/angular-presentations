import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-slide-title',
  template: `
    <div class="slide">
      <h1 class="my-5">{{content.title}}</h1>
      <h2 class="my-5">{{content.subtitle}}</h2>
    </div>
  `,
})
export class SlideTitleComponent {

  @Input() content

}
