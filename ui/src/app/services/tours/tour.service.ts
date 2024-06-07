import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TourModel } from './interfaces/tourModel';
import { environment } from '../../../environments/environment.development';
import { ResponseModel } from '../../common-interfaces/responseModel';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http : HttpClient) { }

  apiUrl = environment.apiUrl + 'Tours/'

  getAllTours(pageIndex:number, pageSize:number) : Observable<TourModel[]>{
    return this.http.get<TourModel[]>(`${this.apiUrl}${pageIndex}/${pageSize}`);
  }

  getTourById(id:number) : Observable<TourModel>{
    return this.http.get<TourModel>(`${this.apiUrl}${id}`)
  }

  deleteTour(id:number) : Observable<ResponseModel>{
    return this.http.delete<ResponseModel>(`${this.apiUrl}${id}`);
  }
}