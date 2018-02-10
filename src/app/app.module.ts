import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { UiModule } from './ui/ui.module'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
