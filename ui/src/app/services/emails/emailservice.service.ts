import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { EmailAddressModel } from './interfaces/email-model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../common-interfaces/responseModel';
import { CreateEmailModel } from './interfaces/create-emailModel';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  constructor(private http : HttpClient) { }
  apiUrl = environment.apiUrl
  GetAllEmails(): Observable<EmailAddressModel[]>{
    return this.http.get<EmailAddressModel[]>(`${this.apiUrl}Email/GetAllEmails`);
  }

  createEmail(data:CreateEmailModel) : Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${this.apiUrl}Email/CreateEmail`, data);
  }
}
