import {NgModule, Component, OnInit } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {FooterComponent} from '../footer/footer.component';
import {HowWorksSectionComponent} from '../how-works-section/how-works-section.component'
import {BlogSectionComponent} from '../blog-section/blog-section.component';
import {FunFactsComponent} from '../fun-facts/fun-facts.component';
import {BeneficiariesComponent  } from "../beneficiaries/beneficiaries.component";
import {HeaderComponent} from '../header/header.component'
@NgModule({
  declarations:[
    HeroComponent, 
    FooterComponent,
    HowWorksSectionComponent,
    BlogSectionComponent,
    FunFactsComponent,
    BeneficiariesComponent,
    HeaderComponent
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
