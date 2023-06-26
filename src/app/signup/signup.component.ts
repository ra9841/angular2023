import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Signups } from 'src/assets/signups.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:string=""; 
  signups:Signups[]=[];
  constructor(private httpClient : HttpClient,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    var header = {
      headers: new HttpHeaders()
     .set('Authorization',  `Bearer ${localStorage.getItem('Authorization')}`)
   }
  }

  public validate(pusername:any,ppassword:any) : void {
    const reqeuestBody={username:pusername.value,password:ppassword.value};
    //HERE WE ARE MAKING REST CALL
    let response:Observable<Signups> = 
    this.httpClient.post<Signups>("http://localhost:8080/v2/auth",reqeuestBody);
    response.subscribe((data:Signups)=>{
        console.log(data);
        
    });
  }


  

}
