import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signups } from 'src/assets/signups.model';


@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  // header={
  //   headers: new HttpHeaders()
  //   .set('Authorization',`Bearer ${localStorage.getItem('Authorization')}`)
  // }
 
  url:string="";

  constructor(private httpClient:HttpClient) { }

  usersData(){   
   
    this.url = "http://localhost:8080/v2/signups";
    return this.httpClient.get<Signups[]>(this.url);
  }
 

deleteUser(sid:number){

  this.url = "http://localhost:8080/v2/signups/";
  return this.httpClient.delete(this.url+sid);
}

getUser(sid:number){
 
  this.url = "http://localhost:8080/v2/signups/"; 
  return this.httpClient.get(this.url+sid);
}

updateUser(userinfo:Signups){
 
  this.url = "http://localhost:8080/v2/signups"; 
  return this.httpClient.put(this.url, userinfo);


}



}
