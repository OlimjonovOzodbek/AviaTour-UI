import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { AddressModel } from './interfaces/address-model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http : HttpClient) { }
  apiUrl = environment.apiUrl
  GetAllAddress(): Observable<AddressModel[]>{
    return this.http.get<AddressModel[]>(`${this.apiUrl}Address/GetAllAddress`);
  }
}
