import { Component, OnInit } from '@angular/core';
import { p } from '@angular/core/src/render3';
import { DataServiceService } from '../../../data-service.service';
import {HelpersServiceService} from '../../../helpers-service.service'
@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.css'],
  providers:[DataServiceService, HelpersServiceService]
})
export class MilestonesComponent implements OnInit {
  milestones= []
  total : Number;
  lento : Number;

  pde= 'sZRg$CCX8Aa7k'
  constructor(private DataService: DataServiceService, private Helpers : HelpersServiceService) { }

  ngOnInit() {
    this.DataService.getMilestones().subscribe((data: any [])=>{
      this.milestones= data;
      localStorage.setItem('milestones', JSON.stringify(this.milestones))
      
      let status = data.map(d=>{
        return d.status
      })
    let pendingTasks = this.Helpers.getOccurrence(status, "pending")

    let completedTasks = this.Helpers.getOccurrence(status, 'completed')
      //  getPercentage(pendingTasks, status.length)
      this.lento = this.Helpers.getPercentage(completedTasks, status.length)

      //Sum total Amount
      let sum = data.map(dat=>{
        return dat.amount
      })
       this.total = sum.reduce((a, b)=>{
        return a + b;
    }, 0);
    
    })

  }

}
