import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TourModel } from './interfaces/tourModel';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http : HttpClient) { }

  apiUrl = environment.apiUrl

  getAllTours(pageIndex:number, pageSize:number) : Observable<TourModel[]>{
    return this.http.get<TourModel[]>(`${this.apiUrl}Tours/${pageIndex}/${pageSize}`);
  }

  getTourById(id:number) : Observable<TourModel>{
    return this.http.get<TourModel>(`${this.apiUrl}Tours/${id}`)
  }
}