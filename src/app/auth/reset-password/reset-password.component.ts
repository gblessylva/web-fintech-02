import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [DataServiceService]
})
export class ResetPasswordComponent implements OnInit {
  resetResquestForm: FormGroup
  email: FormControl
  loading: boolean = false
  errorMessage : any
  showModal: boolean = false
  constructor(private router : Router, private Dataservice: DataServiceService) { }

  ngOnInit() {
    this.createFormControl()
    this.createFormGroup()
  }
  createFormGroup(){
    this.resetResquestForm = new FormGroup({
      email: this.email
    })

  }
  createFormControl(){
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")])
  }
  hideModal(){
    this.showModal = false
  }
  onSubmit(){
    window.scroll(0,0)
    this.loading = true
   let email = this.resetResquestForm.value
    this.Dataservice.passwordResetRequest(email).subscribe(resp=>{
      if(resp.body.success != true){
        this.showModal = true
        this.errorMessage = resp.body.errMsg[0].message
        this.loading = false
        this.resetResquestForm.reset()
      }else{
        this.loading = false;
        this.showModal = true
        this.errorMessage = resp.body.message
        this.resetResquestForm.reset()

      }
    })
  }
}
