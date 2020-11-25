import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../../data-service.service';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css'],
  providers: [DataServiceService]
})
export class InvestorsComponent implements OnInit {
  users = []
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((data: any [])=>{
      this.users = data
      console.log(this.users)
    })
  }

}
