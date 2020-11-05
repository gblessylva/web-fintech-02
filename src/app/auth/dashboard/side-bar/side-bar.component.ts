import { Component, OnInit } from '@angular/core';
import {
  state,
  style,
  transition,
  animate,
  trigger
} from "@angular/animations";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0}),
            animate('.5s ease-out', 
                    style({ width: 250 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: 250,}),
            animate('.5s ease-in', 
                    style({ width: 0,}))
          ]
        )
      ]
    )
  ]
})
export class SideBarComponent implements OnInit {
  menu = true
  constructor() { }

  ngOnInit() {
    
  }
  
}
