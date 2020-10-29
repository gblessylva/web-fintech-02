import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
// import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DefaultComponent } from './components/default/default.component';
// import { NotfoundComponent } from './components/notfound/notfound.component';

const route: Routes = [

      { path: '', component: DefaultComponent },
      { path: 'Home', component: HomeComponent},
      { path: 'About', component: AboutComponent},
      { path: 'Contact', component: ContactComponent},
      { path: 'Login', component: LoginComponent},
      { path: 'SignUp', component: SignupComponent},
      // { path: 'Hero', component: HeroComponent},
      // { path: 'Footer', component: FooterComponent
      {path: '**', redirectTo: ''}
    ];
@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(route)],

   exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
