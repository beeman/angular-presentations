import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-slide-html',
  template: `
    <app-abstract-slide [content]="content">
      <div [innerHtml]="content.html"></div>
    </app-abstract-slide>
  `,
})
export class SlideHtmlComponent extends AbstractSlideComponent {
  constructor(private sanitizer: DomSanitizer) {
    super()
  }
}
