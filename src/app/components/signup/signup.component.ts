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

  myform: FormGroup;
  email: FormControl;
  password: FormControl;
  username: FormControl;
  confirmPassword: FormControl;
  checked: boolean = true
  showModal: boolean = false
  errorMessage = []
  loading: boolean = false

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
  
  hideModal(){
    this.showModal = false;
  }

  onSubmit() {
    if (this.myform.valid) {
      window.scroll(0,0);
      this.loading = true
      const newUser = this.myform.value
      this.DataService.registerUser(newUser).subscribe(resp=>{
        if(resp.body.success != true){
          this.loading = false
          let serverError = resp.body.errMsg[0].message
          this.errorMessage = serverError
          this.showModal =true;
          console.log(this.errorMessage)
          
        }else{
        setTimeout(()=>{
            this.redirect()
          }, 1000)
        }
       
      }, (error)=>{
        console.error('An error occured', error)
      })     
    }else{
      console.log('Invalid values found')
    }
  }
}
