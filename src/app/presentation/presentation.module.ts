import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { PrismModule } from '@sgbj/angular-prism'
import { PresentationComponent } from './container/presentation/presentation.component';
import { SlidesService } from './services/slides.service';
import { SlideComponent } from './components/slide/slide.component';
import { SlideListComponent } from './components/slide-list/slide-list.component';
import { SlideTitleComponent } from './components/slide-title/slide-title.component';
import { SlideImageComponent } from './components/slide-image/slide-image.component';
import { SlideCodeComponent } from './components/slide-code/slide-code.component';
import { SlideHtmlComponent } from './components/slide-html/slide-html.component';
import { AbstractSlideComponent } from './components/abstract-slide/abstract-slide.component';
import { SlideYoutubeComponent } from './components/slide-youtube/slide-youtube.component'

import 'prismjs/prism';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: ':slideId', component: PresentationComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrismModule,
  ],
  declarations: [
    PresentationComponent,
    SlideComponent,
    SlideListComponent,
    SlideTitleComponent,
    SlideImageComponent,
    SlideCodeComponent,
    SlideHtmlComponent,
    AbstractSlideComponent,
    SlideYoutubeComponent,
  ],
  providers: [SlidesService]
})
export class PresentationModule { }
