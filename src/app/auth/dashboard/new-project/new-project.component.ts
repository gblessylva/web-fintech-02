import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import {DataServiceService} from '../../../data-service.service';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [DataServiceService]
})
export class NewProjectComponent implements OnInit {
  public Editor = ClassicEditor;
  projectFormData;

  constructor(private DataService: DataServiceService) {}

postProject(project){
  const {projectName, projectDescription, projectDuration, amountNeeded, companyID} = project.value
  const newProject = {
    projectName, projectDescription, projectDuration, amountNeeded, companyID
  }
  
  this.DataService.postProject(newProject).subscribe((data: any [])=>{
    console.log("added new project", data)
  })
  
}
  ngOnInit() {

    this.projectFormData = new FormGroup({
      projectName: new FormControl(''),
      projectDescription: new FormControl(''),
      projectDuration: new FormControl(''),
      amountNeeded: new FormControl(''),
      companyID:  new FormControl('5f9510193daeaa3010884443')
    })
  }
  
 
}
