import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  isAdmin() {
    let loginDetailString = localStorage.getItem('user');
    let loginDetails = JSON.parse(loginDetailString);
    if(loginDetails && loginDetails.role==='admin') {
      return true;
    } else {
      return false;
    }
  }

  isCustomer() {
    let custDetailString = localStorage.getItem('user');
    let custDetails = JSON.parse(custDetailString);
    if(custDetails && custDetails.role==='user') {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    console.log('role');
    // alert('You are logged out... Thanks for using our services')
    this.router.navigateByUrl('/');
  }

}
