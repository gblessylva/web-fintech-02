import { Component, NgModule, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { DataServiceService } from '../../data-service.service';
import { HelpersServiceService } from '../../helpers-service.service';
import { SideBarComponent } from './side-bar/side-bar.component';
@NgModule({
  declarations: [
    SideBarComponent
  ],
  
})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [    DataServiceService, HelpersServiceService
  ]
})

export class DashboardComponent implements OnInit {
  milestones = []
  pendingMilestones: any
  completedMilestones: any
  successRate: Number
  amountRequested : Number

  constructor(private DataService: DataServiceService, private Helpers : HelpersServiceService) { }
  ngOnInit() {
      this.DataService.getMilestones().subscribe((data: any []) =>{
        this.milestones = data;

        let sum = data.map(dat=>{
          return dat.amount
        })
         this.amountRequested = sum.reduce((a, b)=>{
          return a + b;
      }, 0);
        
      let status = this.milestones.map(d=>{
        return d.status
      })
        this.pendingMilestones = this.Helpers.getOccurrence(status, "pending")
        this.completedMilestones = this.Helpers.getOccurrence(status, 'completed')
        
        this.successRate =this.Helpers.getPercentage(this.completedMilestones, status.length)
      })
    
  }
    
}
