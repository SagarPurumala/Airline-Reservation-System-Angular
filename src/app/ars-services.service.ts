import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightInfo } from './flightInfo';
import { Observable } from 'rxjs';
import { AirportInfo } from './airport';
import { ProfileInfo } from './profileInfo';

@Injectable({
  providedIn: 'root'
})

export class ArsServicesService {

  databaseURL = 'http://localhost:8080';
  id;
  constructor(private http: HttpClient) { }

  //admin functionality is done using this array
  flightInfo: FlightInfo[] = [];
  airportInfo: AirportInfo[] = [];


  getFlightInformation() {
    this.http.get<any>(`${this.databaseURL}`).subscribe(data => {
      console.log(data);
      this.flightInfo = data;
      console.log(this.flightInfo);
    });
  }

  isLoggedIn() {
    const userDetails = JSON.parse(localStorage.getItem('user'));
    if (userDetails) {
      return true;
    } else {
      return false;
    }
  }

  //for login
  userLogin(data) {
    return this.http.post<any>(`${this.databaseURL}/userLogin`, data);
  }

  //new customer signup
  newAccount(users) {
    return this.http.post<any>(`${this.databaseURL}/registerUser`, users);
  }

  //new admin/exe signup by admin
  addAccountByAdmin(users) {
    return this.http.post<any>(`${this.databaseURL}/registerByAdmin`, users);
  }

  //get all flight-info for admin only 
  getFlightInfo(): Observable<any> {
    return this.http.get<any>(`${this.databaseURL}/getAll`);
  }

  //delete a flight
  cancelFlight(data) {
    return this.http.delete(`${this.databaseURL}/deleteFlight?flightNumber=${data}`);
  }
  //update flight details 
  updateFlightInfo(data) {
    return this.http.put(`${this.databaseURL}/updateFlight`, data);
  }
  //add new flight  
  addNewFlight(data) {
    return this.http.post(`${this.databaseURL}/addFlight`, data);
  }
  //book ticket
  bookTicket(data) {
    return this.http.post(`${this.databaseURL}/bookFlight`, data);
  }
   //cancel booking
   cancelBooking(data) {
    return this.http.delete(`${this.databaseURL}/deleteBooking?bookingId=${data}`);
  }

  //search Location
  searchLocation(data) {
    return this.http.post<any>(`${this.databaseURL}/searchFlight`, data);
  }

  //get profile info
  getProfileInfo(): Observable<any> {
    this.id=localStorage.getItem('userId');
    console.log(this.id);
    return this.http.get<any>(`${this.databaseURL}/getAllBooking/${this.id}`);
  }

  // getProfileInfo(profileInfo: ProfileInfo): Observable<any> {
  //   return this.http.get<any>(`${this.databaseURL}/getAllBooking/${profileInfo.userId}`);
  // }
  // getProfileInfo(data): Observable<any> {
  //   return this.http.get<any>(`${this.databaseURL}/getAllBooking`,data);
  // }

  //get all airport-info for admin only 
  getAllAirport(): Observable<any> {
    return this.http.get<any>(`${this.databaseURL}/getAllAirports`);
  }

  //cancel a airport
  deleteAirport(data) {
    return this.http.delete(`${this.databaseURL}/deleteAirport?abbreviation=${data}`);
  }
  //update airport details 
  updateAirportInfo(data) {
    return this.http.put(`${this.databaseURL}/updateAirport`, data);
  }
  //add new airport  
  addNewAirport(data) {
    return this.http.post(`${this.databaseURL}/addAirport`, data);
  }
}
