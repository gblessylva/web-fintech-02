import {  Routes } from "@angular/router";

import {   AuthGuardService as AuthGuard } from '../../guards/auth-guard.service';
import { DashboardComponent} from "./dashboard.component";
import { InvestorsComponent } from "./investors/investors.component";
import { MilestonesComponent } from "./milestones/milestones.component";
import { ProfileComponent } from "./profile/profile.component";


export const DashboardModuleRouting: Routes = [
    
    {path: 'sme-dashboard', canActivate: [AuthGuard], component: DashboardComponent},
    {path: 'milestones', component: MilestonesComponent, canActivate: [AuthGuard] },
    {path: 'investors', component: InvestorsComponent, canActivate: [AuthGuard] },
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
]