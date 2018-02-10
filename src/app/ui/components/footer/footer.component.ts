import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <div class="navbar-text m-auto">
          <a [attr.href]="link" target="_blank">{{author}} &copy; {{year}}</a>
      </div>
    </nav>
  `,
  styles: []
})
export class FooterComponent {
  public link = 'https://github.com/beeman/angular-presentations'
  public author = 'beeman 🐝'
  public year = '2018'
}
