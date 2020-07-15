import { Component, OnInit } from '@angular/core';
import { ArsServicesService } from '../ars-services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {

  constructor(private service : ArsServicesService) { }

  bookTicket(form: NgForm) {
    console.log(form.value);
    this.service.bookTicket(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      alert("Congratulations !!! Ticket Booked.");
    },err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
