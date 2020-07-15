import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from '../profileInfo';
import { ArsServicesService } from '../ars-services.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileInfo = [];  

  searchedProfileInfo: ProfileInfo[];


  selectedProfile: ProfileInfo = {
    flightNo: null,
    departureCity: null,
    arrivalCity: null,
    departureDate: null,
    arrivalDate: null,
    departureTime: null,
    arrivalTime: null,
    bookingId: null,
    userId: null,
    firstName: null,
    lastName: null,
    classType: null,
    passengers: 0,
    totalFare: 0,
  };

  constructor(private service: ArsServicesService, private router: Router) {
    // this.service.getProfileInfo(profile:ProfileInfo);

  }
  ngOnInit() {
   
   }

  
  selectProfile(sprofile: ProfileInfo) {
    
    this.selectedProfile = sprofile;
  }


  getProfiles(searchForm: NgForm) {
//console.log(searchForm.value);
    this.service.getProfileInfo(searchForm.value).subscribe(data => {
      console.log(data);
      this.profileInfo=data;
      console.log(this.profileInfo);
      
      
    }, err => {
      console.log(err);

    })
  }

 

}
