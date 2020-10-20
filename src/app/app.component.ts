import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-header></app-header>
   <!-- <app-home></app-home> -->
   <app-footer></app-footer>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
