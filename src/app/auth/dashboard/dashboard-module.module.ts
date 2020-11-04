import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DashboardModuleRouting } from './dasboard.routing';
import { InvestorsComponent } from './investors/investors.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { NewProjectComponent } from './new-project/new-project.component';


@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(DashboardModuleRouting)
  ],
  declarations: [
    InvestorsComponent,
    ProfileComponent,
    ProjectsComponent,
    DashboardComponent,
    MilestonesComponent,
    NewProjectComponent
  ]
})
export class DashboardModuleModule { }
