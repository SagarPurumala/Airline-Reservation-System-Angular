import { Component, OnInit } from '@angular/core';
import { ArsServicesService } from '../ars-services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service : ArsServicesService) { }

  registerForm(form: NgForm) {
    console.log(form.value);
    this.service.addAccountByAdmin(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      alert("Account created !!!");
    },err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }
  
}
