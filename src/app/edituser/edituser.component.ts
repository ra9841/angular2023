import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserapiService } from '../services/userapi.service';
import { Signups } from 'src/assets/signups.model';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit{

  sid:any
  edituser:any ={};
  
  constructor(private router: ActivatedRoute,private userService:UserapiService,private routers:Router){  }


  ngOnInit(): void {

    this.router.paramMap.subscribe(params => {      
      this.sid = params.get('sid');
      
     this.userService.getUser(this.sid).subscribe((data:any)=>{
      this.edituser=data;
    })

        
  });

  }
  save(){
    this.userService.updateUser(this.edituser).subscribe((data)=>{
        console.log(data);
    });

    this.routers.navigate(['home']);

  }



}
