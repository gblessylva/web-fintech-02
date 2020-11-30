import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../data-service.service';


@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css'],
  providers: [DataServiceService]
})
export class VerifyAccountComponent implements OnInit {

  constructor(private route: ActivatedRoute, private DataService: DataServiceService) { }
  userId : string;
  code : string 

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.code = this.route.snapshot.paramMap.get('code')
    
    this.DataService.verifyNewAccount(this.userId, this.code).subscribe(resp=>{
      console.log(resp)
    })
  

    console.log(this.userId, this.code)
  }

}
