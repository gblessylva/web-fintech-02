import {NgModule, Component, OnInit } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {FooterComponent} from '../footer/footer.component'

@NgModule({
  declarations:[
    HeroComponent, 
    FooterComponent
  ]
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
