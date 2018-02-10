import { Component } from '@angular/core'
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-slide-code',
  template: `
    <app-abstract-slide [content]="content">
      <prism *ngIf="content.code && content.language" [code]="content.code" [language]="content.language"></prism>
    </app-abstract-slide>
  `,
})
export class SlideCodeComponent extends AbstractSlideComponent {}
