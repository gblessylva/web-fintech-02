import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    title = 'Investa';
    @Input () deviceXs: boolean;
  constructor() { }

  ngOnInit() {
  }
  show() {
    console.log('Display show');
  }
}
