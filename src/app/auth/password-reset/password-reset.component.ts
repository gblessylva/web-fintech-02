import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
  providers: [DataServiceService]
})
export class PasswordResetComponent implements OnInit {
  loading: boolean = false
  resetConfirmForm: FormGroup
  email: FormControl
  password: FormControl
  code: string
  confirmPassword: FormControl
  showModal :boolean = false
  errorMessage: any

  constructor(private route: ActivatedRoute, private router: Router, private Dataservice : DataServiceService ) { }

  createFormControls() {
    this.email = new FormControl('', [
     Validators.required,
     Validators.pattern("[^ @]*@[^ @]*")
   ]);
   this.password = new FormControl('', [
     Validators.required,
     Validators.minLength(6),
     Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/)
   ]);
   this.confirmPassword = new FormControl ('', [Validators.required])

 }
  createFormGroup(){
    this.resetConfirmForm = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    })
  }
  ngOnInit() {
    this.createFormControls()
    this.createFormGroup()
  }
  hideModal(){
    this.showModal = false
  }
  redirect(){
    return  this.router.navigate(['/login'])
  }
  onSubmit(){
    window.scroll(0, 0)
    const {email, password, confirmPassword} = this.resetConfirmForm.value
    const userInfo = {
      email, 
      password, 
      confirmPassword, 
      code: this.route.snapshot.paramMap.get('code')
    }

    this.Dataservice.confirmPasswordReset(userInfo).subscribe(resp=>{
      
      this.loading = true
      if(resp.body.success !=true){
        this.showModal = true
        this.errorMessage = resp.body.errMsg[0]
        this.loading = false
        // console.log(resp.body.errMsg[0])
      }else{
        
        this.showModal = true
        const {message} = resp.body
        this.errorMessage = message
        this.loading = false
        this.resetConfirmForm.reset()
        setTimeout(()=>{
            this.redirect()
        }, 3000)
      }
    })

  }
}
