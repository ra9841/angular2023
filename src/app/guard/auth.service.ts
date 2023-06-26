import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn(){
    return sessionStorage.getItem("Authorization")!=null;
  }

  public haveAccess(){
    //jsjw83.weh8239nwqeqw.qwewqewqe
    let jwtToken=sessionStorage.getItem("Authorization") || '';
    let payload=jwtToken.split('.')[1];
    let claims=atob(payload);
    let data =JSON.parse(claims);
    if(data.authorities=='ROLE_ADMIN'){
      return true;
    }else{
     return false;
    }
  }
 
  public CleanAuthToken() : void {
    sessionStorage.removeItem("Authorization")
  }
 
}
