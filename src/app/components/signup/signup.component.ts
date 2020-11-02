import { Component, OnInit } from '@angular/core';
import { Usersignup } from '../login/usersignup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  // Property for the gender
  public gender: string[];
  // Property for the user
  public user: Usersignup;

  ngOnInit() {

    this.gender =  ['Male', 'Female', 'Others'];
    // Create a new user object
    this.user = new Usersignup({email:"", password: { pwd: "" , confirmPwd: ""}, gender: this.gender[0], terms: false});
  }

   onFormSubmit({ value, valid}: { value: Usersignup, valid: boolean }) {
  this.user = value;
  console.log( this.user);
  console.log('valid:' + valid);
 }
}
