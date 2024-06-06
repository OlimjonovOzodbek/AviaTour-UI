import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ContactModel } from './interfaces/contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private http : HttpClient) { }

  apiUrl = environment.apiUrl

  GetAllContact(): Observable<ContactModel[]>{
    return this.http.get<ContactModel[]>(`${this.apiUrl}Contact/GetAllContacts`);
  }
}
