import { Component, OnInit } from '@angular/core';
import { ArsServicesService } from '../ars-services.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from '../flight';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
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

  bookTicket(form: NgForm) {
    console.log(form.value);
    this.service.bookTicket(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      alert("Congratulations !!! Ticket Booked.");
    }, err => {
      console.log(err);
    });
  }

  
}
