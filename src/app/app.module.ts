import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HowWorksSectionComponent } from './components/how-works-section/how-works-section.component';
import { BeneficiariesComponent } from './components/beneficiaries/beneficiaries.component';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { ProjectsComponent } from './auth/dashboard/projects/projects.component';
import { MilestonesComponent } from './auth/dashboard/milestones/milestones.component';
import { ProfileComponent } from './auth/dashboard/profile/profile.component';
import { SideBarComponent } from './auth/dashboard/side-bar/side-bar.component';
import { InvestorsComponent } from './auth/dashboard/investors/investors.component';
import { MessageComponent } from './components/message/message.component';
import { MessageService } from './components/message/message.service';
import { FaqComponent } from './components/faq/faq.component';
import { NewProjectComponent } from './auth/dashboard/new-project/new-project.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddNewMilestoneComponent } from './auth/dashboard/add-new-milestone/add-new-milestone.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HeroComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    HowWorksSectionComponent,
    BeneficiariesComponent,
    FunFactsComponent,
    BlogSectionComponent,
    DashboardComponent,
    ProjectsComponent,
    MilestonesComponent,
    ProfileComponent,
    SideBarComponent,
    InvestorsComponent,
    MessageComponent,
    FaqComponent, 
    NewProjectComponent,
    AddNewMilestoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule,
    CKEditorModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [AuthService, AuthGuardService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
