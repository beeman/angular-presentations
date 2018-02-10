import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-slide-image',
  template: `
    <div class="slide">
      <h1 class="my-5">{{content.title}}</h1>
      <div class="my-5 text-center">
        <img class="img-fluid" [attr.src]="content.image" />
      </div>
    </div>
  `,
  styles: []
})
export class SlideImageComponent {

  @Input() content

}
