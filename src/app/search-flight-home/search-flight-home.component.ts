import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { ArsServicesService } from '../ars-services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-flight-home',
  templateUrl: './search-flight-home.component.html',
  styleUrls: ['./search-flight-home.component.css']
})
export class SearchFlightHomeComponent implements OnInit {

  flights = [];

  searchedFlightInfo: Flight[];


  searchedFlight : Flight = {
    flightNo: null,
    departureCity: null,
    arrivalCity: null,
    airline: null,
    departureDate: null,
    arrivalDate: null,
    departureTime: null,
    arrivalTime: null,
    firstClassSeats: null,
    firstClassSeatFare: null,
    bussinessClassSeats: null,
    bussinessClassFare: null,
  };

  constructor(private service: ArsServicesService, private router: Router) { 
    
  }

  ngOnInit() {
  }

  selectFlight(sflight: Flight) {
    this.searchedFlight = sflight;
  }

  searchLocation(searchForm: NgForm) {
    this.service.searchLocation(searchForm.value).subscribe(data => {
      console.log('hi');
      this.flights = data;
      console.log(this.flights)
     
    }, err => {
      console.log(err);

    });
  }

}
