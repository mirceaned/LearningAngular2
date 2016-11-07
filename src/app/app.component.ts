import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>Inline template</h1>
    <app-databinding></app-databinding>
  `
})
export class AppComponent {
  title = 'app works now yeah!';
}
