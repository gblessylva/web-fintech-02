import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../data-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [DataServiceService]
})
export class ProjectsComponent implements OnInit {
    projects = []
  constructor(private DataService: DataServiceService) { }

  ngOnInit() {

      this.DataService.getProject().subscribe((data: any [])=>{
        this.projects = data
        console.log(this.projects)
      })
  }

}
