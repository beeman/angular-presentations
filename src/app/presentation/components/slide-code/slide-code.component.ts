import { Component } from '@angular/core'
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-slide-code',
  template: `
    <app-abstract-slide [content]="content">
      <prism-block [code]="content.code" [language]="content.language"></prism-block>
    </app-abstract-slide>
  `,
  styles: []
})
export class SlideCodeComponent extends AbstractSlideComponent {}
