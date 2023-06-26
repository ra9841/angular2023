import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Signups } from 'src/assets/signups.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserapiService } from '../services/userapi.service';
import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signups:Signups[]=[];
  msg:any={};

  constructor(private httpClient : HttpClient, private router:Router,
    private authservice:AuthService, private userService:UserapiService) {
   }

  ngOnInit(): void {
     //Fetch data when page before page is loaded
     this.fetchData();   
  }

  deleteUser(sid:number){
      this.userService.deleteUser(sid).subscribe((data:any)=>{
      this.msg=data;
      console.log(this.msg);
       this.fetchData();
     // this.redirectTo('home');
   });
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
 }


  fetchData(){
    this.userService.usersData().subscribe((data:any)=>{

      console.log(data);
      this.signups=data;    
   });
  }


  logOut(){

    this.authservice.CleanAuthToken();
    this.router.navigate(['']);




  }




}
