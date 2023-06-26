import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {

  
  const authService = inject(AuthService);
  const router = inject(Router);

  if(new AuthService().haveAccess()){
    return true;
  }
   router.navigateByUrl('');
   authService.CleanAuthToken();
   return false;


  
};
