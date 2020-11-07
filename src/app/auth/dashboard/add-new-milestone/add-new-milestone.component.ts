import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import {DataServiceService} from '../../../data-service.service';

@Component({
  selector: 'app-add-new-milestone',
  templateUrl: './add-new-milestone.component.html',
  styleUrls: ['./add-new-milestone.component.css'],
  providers: [DataServiceService]
})
export class AddNewMilestoneComponent implements OnInit {
  title;
  formData;
  duration = 0;
  showModal = false;
  projects = [];

  constructor(private dataService: DataServiceService) { }

  
  testForm(milestone) {
    const {title, description, amount, startdate, endDate, projectID} = milestone.value;

    const _startdate = new Date(milestone.value.startdate)
    const enddate = new Date(milestone.value.endDate)
    const timeDuration =  enddate.getTime() - _startdate.getTime()
    const _duration = timeDuration / (1000 * 3600 * 24)
    
    const milestones ={
      name: title,
      description,
      amount,
      duration: _duration,
      startdate,
      endDate,
      projectID
     }

     
      this.dataService.postMilestones(milestones).subscribe(data=>{
        console.log('added new milestone', data)
        })
        this.showModal = true;
        
  }

  hideModal(){
    this.showModal = false;
    this.formData.reset();

  }

  

  ngOnInit() {
      this.dataService.getProject().subscribe((project: any [])=>{
        this.projects = project
        
      })

    this.formData = new FormGroup({ 
      title: new FormControl(""),
      description: new FormControl(""),
      amount: new FormControl(""),
      startdate: new FormControl(''),
      endDate: new FormControl(),
      projectID: new FormControl()
   });
  }


}
