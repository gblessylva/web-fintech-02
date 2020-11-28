import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Usersignup } from '../login/usersignup';

import { 
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [DataServiceService]
})




export class SignupComponent implements OnInit {

  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  email: FormControl;
  password: FormControl;
  username: FormControl;
  confirmPassword: FormControl;
  checked: boolean = true
  shaped: boolean = false

  constructor(private DataService: DataServiceService, private router: Router) {  }

  createFormControls() {
     this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.username = new FormControl('');

    this.confirmPassword = new FormControl('', [
      Validators.required
    ])
  }

  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.password,
      username: this.username,
      confirmPassword: this.confirmPassword
    });
  }

  redirect(){
    return this.router.navigate(['/confirm-email'])
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  changed(){
    this.checked = !this.checked    
  }
  shape(){
    this.shaped = !this.shaped
    console.log(this.shaped)
  }
  onSubmit() {
    
    
    if (this.myform.valid) {
      const newUser = this.myform.value
      this.DataService.registerUser(newUser).subscribe(resp=>{
        console.log(resp)
      }, (error)=>{
        console.error('An error occured', error)
      })
    
      // console.log(this.myform.value);
      // setTimeout(()=>{
      //    this.redirect()
      // }, 1000)
     
    }else{
      console.log('Invalid values found')
    }
  }
}
