import { Component, NgModule, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { SideBarComponent } from './side-bar/side-bar.component';
@NgModule({
  declarations: [
    SideBarComponent
  ]
})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }
  
  ngOnInit() {
    
  }
}
