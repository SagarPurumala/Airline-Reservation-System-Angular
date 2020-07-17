import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { CategoryComponent } from './category/category.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchedFlightComponent } from './searched-flight/searched-flight.component';
import { ProfileComponent } from './profile/profile.component';
import { AirportComponent } from './airport/airport.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { SearchFlightHomeComponent } from './search-flight-home/search-flight-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    PreviewComponent,
    FlightInfoComponent,
    CategoryComponent,
    AddFlightComponent,
    TicketbookingComponent,
    PaymentComponent,
    SearchedFlightComponent,
    ProfileComponent,
    
    AirportComponent,
    AddAirportComponent,
    SearchFlightHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
