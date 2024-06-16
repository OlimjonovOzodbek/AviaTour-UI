import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BookingModel } from './interfaces/booking-model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl = environment.apiUrl + 'Booking';

  constructor(private http : HttpClient) { }

  postBooking(bookingModel:BookingModel){
    this.http.post(this.apiUrl, bookingModel)
  }
}
