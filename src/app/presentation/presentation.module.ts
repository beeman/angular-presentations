import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { PrismComponent } from 'angular-prism/dist/src/prism.component'
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

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: ':slideId', component: PresentationComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PrismComponent,
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
