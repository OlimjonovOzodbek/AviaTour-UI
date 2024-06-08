import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { AboutUsModel } from '../abouts/interfaces/about-us-model'

@Injectable({
  providedIn: 'root'
})
export class AboutusService {

  constructor(private http : HttpClient) { }

  apiUrl = environment.apiUrl

  GetAllAboutUs(): Observable<AboutUsModel[]>{
    return this.http.get<AboutUsModel[]>(`${this.apiUrl}AboutUs`);
  }
}
