import { Component, Input, OnInit } from '@angular/core';

import {
  state,
  style,
  transition,
  animate,
  trigger
} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 200, opacity: 0 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 200,}),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {
   menu = false
    title = 'Investa';
    @Input () deviceXs: boolean;
  constructor() { }

  ngOnInit() {
  }
  show() {
    this.menu = !this.menu
  }
}
