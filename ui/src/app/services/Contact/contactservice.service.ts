import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ContactModel } from './interfaces/contact-model';
import { ResponseModel } from '../../common-interfaces/responseModel';
import { ContactCreate } from './interfaces/contact-create';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private http : HttpClient) { }

  apiUrl = environment.apiUrl

  
  GetAllContact():Observable<ContactModel[]>{
    return this.http.get<ContactModel[]>(`${this.apiUrl}Contact/GetAllContacts`)
  }
  CreateContact(data: ContactCreate): Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${this.apiUrl}Contact/CreateContact`,data)
  
  }
}
