import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { roleGuard } from './guard/role.guard';
import { authguard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent ,canActivate:[authguard]},
  { path: 'signup', component: SignupComponent },
  { path: 'edit/:sid', component: EdituserComponent },
  { path: 'about', component: AboutComponent,canActivate:[roleGuard]  },
  { path: 'contact', component: ContactComponent,canActivate:[roleGuard] },
  {path:'**', redirectTo:'', pathMatch:'full'}  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
