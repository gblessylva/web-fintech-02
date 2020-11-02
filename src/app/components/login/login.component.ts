import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDashboard= (e)=>{
    e.preventDefault()
    localStorage.setItem('authToken', "helloadmin")
    window.location.href='/sme-dashboard'
    
  }
}
