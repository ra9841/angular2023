import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedRequest=req.clone({
      setHeaders:{
        'Authorization':this.getToken(),
         'emaila' :'nagen@gmail.com'
      }
     
      
    });
 
    return next.handle(clonedRequest).pipe(
      tap(
        () => {
          // to fix solar error
        },
        (err: any) => this.redirectToLogin(err)
      )
    );
   }

  public getToken(){
    return 'Bearer ' + sessionStorage.getItem('Authorization') || '';
  }

  redirectToLogin(err: any) {

    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
       this.router.navigate(['/login']);
      }
      if (err.status === 403) {
        //hey! your are not authorized to delete this record!!!!
        this.router.navigate(['/login']);
      }
      if (err.status === 500) {
        this.router.navigate(['/login']);
      }
    }


  }
 
}
