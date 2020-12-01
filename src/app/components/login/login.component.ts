import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataServiceService]
})
export class LoginComponent  {
  
  loading: boolean = false
  showModal: boolean = false
  loginForm: FormGroup;
  email : FormControl
  password : FormControl
  errorMessage :string
  user;
  loginAttempt : number = 0
  showPasswordReset = false

  constructor(private router: Router, private DataService: DataServiceService) { }

  createFormControls() {
    this.email = new FormControl('', [
     Validators.required,
     Validators.pattern("[^ @]*@[^ @]*")
   ]);
   this.password = new FormControl('', [
     Validators.required,
   ]);

 }

 createForm(){
   this.loginForm = new FormGroup({
     email: this.email,
     password: this.password
   })
 }

  ngOnInit() {
    this.createFormControls()
    this.createForm()
  }
  redirect(){
    return this.router.navigate(['/sme-dashboard'])
  }

  hideModal(){
    this.showModal = false
  }

  onSubmit(){
    if (this.loginForm.valid) {
      window.scroll(0,0);
      this.loading = true
      const user = this.loginForm.value;
      this.DataService.login(user).subscribe((resp: any)=>{
        if(resp.body.success == false){
          this.showModal = true
          this.errorMessage = resp.body.errMsg[0].message
          this.loading = false
          this.loginAttempt++
          if(this.loginAttempt==4){
            this.showPasswordReset = true
          }
        }else{
          this.user = resp.body.result
           console.log(this.user)
           localStorage.setItem('authToken', this.user.token)
           this.loading = false
           setTimeout(()=>{
            this.redirect()
          }, 1000)
        }
       
      })

    }
      else{
        this.errorMessage = "An error Occured"
      }
  }


}
