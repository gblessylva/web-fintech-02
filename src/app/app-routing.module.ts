import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {   AuthGuardService as AuthGuard } from './guards/auth-guard.service';
import { AboutComponent } from './components/about/about.component';
// import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
// import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {NotfoundComponent  } from './components/notfound/notfound.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ProjectsComponent } from './auth/dashboard/projects/projects.component';
import { MilestonesComponent } from './auth/dashboard/milestones/milestones.component';
import { InvestorsComponent } from './auth/dashboard/investors/investors.component';
import { ProfileComponent } from './auth/dashboard/profile/profile.component';
import { FaqComponent } from './components/faq/faq.component';
import { NewProjectComponent } from './auth/dashboard/new-project/new-project.component';
import { AddNewMilestoneComponent } from './auth/dashboard/add-new-milestone/add-new-milestone.component';
import { ConfirmMailComponent } from './components/confirm-mail/confirm-mail.component';
import { VerifyAccountComponent } from './auth/verify-account/verify-account.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';


const route: Routes = [

      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'login', component: LoginComponent}, 
      { path: 'register', component: SignupComponent},
      { path: 'FAQ', component: FaqComponent},
      { path: '404', component: NotfoundComponent},
      {path: 'verify-account/:userId/:code', component: VerifyAccountComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'verify-password-reset/:code', component: PasswordResetComponent},
      {
        path: 'projects', 
        component: ProjectsComponent, 
      },
      {
        path: 'sme-dashboard',  
        canActivate: [AuthGuard],   
        component: DashboardComponent   
    },
    {
      path: 'confirm-email',   
      component: ConfirmMailComponent  
  },
    {path: 'milestones', component: MilestonesComponent, canActivate: [AuthGuard] },
    {path:'add-project', component: NewProjectComponent, canActivate: [AuthGuard]},
    {path:'add-milestone', component: AddNewMilestoneComponent, canActivate: [AuthGuard]},
    {path: 'investors', component: InvestorsComponent, canActivate: [AuthGuard] },
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path: '**', redirectTo: '404'}
    ];
@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(route)],

   exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
