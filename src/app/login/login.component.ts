import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArsServicesService } from '../ars-services.service';
import { Router } from '@angular/router';
import { ProfileInfo } from '../profileInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  constructor(private service: ArsServicesService, private router: Router) { }

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    this.service.userLogin(loginForm.value).subscribe(data => {
      // if(data.status===400){
      //   this.message=data.message;
      //   setTimeout(()=>{
      //     this.message=null;
      //   },4000)
      // }
  
      console.log(data);
      console.log(data.role);
      console.log(data.userId)
      localStorage.getItem('userId');

      alert("Welcome !!!");

      localStorage.setItem('user', JSON.stringify(data))
      this.router.navigateByUrl("/");
  
      
    }, err => {
      console.log(err);
    })
  }


  ngOnInit() {
  }

  register() {
    localStorage.clear();
    alert("Congratulations !! you are registered successfully..!");
    this.router.navigateByUrl('/register');
  }

}
