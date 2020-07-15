import { Component, OnInit } from '@angular/core';
import { ArsServicesService } from '../ars-services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
   message;
  constructor(private service : ArsServicesService) { }

  submitForm(form: NgForm) {
    console.log(form.value);
    this.service.newAccount(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      if(!response.error){
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },4000)
      }
      
    },err => {
      console.log(err);
    });
  }
  ngOnInit() {
  }

}
