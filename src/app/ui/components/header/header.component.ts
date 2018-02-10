import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img [attr.src]="logo" width="27" height="27" class="d-inline-block align-top" alt="">
        {{title}}
      </a>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {

  public title = 'Angular Presentations'
  public logo = '/assets/logo.svg'

}
