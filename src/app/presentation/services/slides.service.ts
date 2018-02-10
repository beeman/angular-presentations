import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

const slideTypes = ['title', 'list', 'image', 'code', 'html', 'youtube']

const slide = (type: string, content: any) => ({ type, content })
const slideTitle = (title: string, subtitle: string) => slide('title', { title, subtitle })
const slideList = (title: string, items: string[]) => slide('list', { title, items })
const slideImage = (title: string, image: string) => slide('image', { title, image })
const slideCode = (title: string, code: string, language: string) => slide('code', { title, code, language })
const slideHtml = (title: string, html: string) => slide('html', { title, html })
const slideYouTube = (title: string, url: string) => slide('youtube', { title, url })

@Injectable()
export class SlidesService {

  public slides = [
    slideTitle(
      'Angular Presentations',
      'A simple Angular app that can be used to create Presentations'
    ),
    slideList(
      'Slide types',
      [
        'Title',
        'List (this one)',
        'Image',
        'Code',
        'HTML',
        'YouTube',
      ]
    ),
    slideImage(
      'Angular Logo',
      'https://angular.io/assets/images/logos/angular/angular.png',
    ),
    slideCode(
      'Sample NgModule',
      `import { NgModule } from '@angular/core'

@NgModule({
  imports: [],
  providers: [],
})
export class SampleModule {}`,
      'typescript',
    ),
    slideHtml(
      'Some HTML code',
      `<div class="text-center">
        <h1>SOME HTML CODE! 😎</h1>
      </div>
      `
    ),
    slideYouTube(
      'A YouTube video',
      'https://www.youtube.com/embed/4zuQjHEjMuY?rel=0&amp;showinfo=0&amp;controls=0&amp;autoplay=0',
    )
  ]

  public getSlides() {
    return Observable.of(this.slides)
  }

  public getSlideTypes() {
    return slideTypes
  }
}
