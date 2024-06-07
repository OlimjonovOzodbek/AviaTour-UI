import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { CommentModel } from './interfaces/comment-model';
import { CommentCreateModel } from './interfaces/comment-create-model';
import { ResponseModel } from '../../common-interfaces/responseModel';
import { CommentUpdateModel } from './interfaces/comment-update-model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }
  
  apiUrl = environment.apiUrl + 'Comments/';

  getCommetsByTourId(tourId:number) : Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>(`${this.apiUrl}${tourId}`);
  }

  createComment(data:CommentCreateModel) : Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${this.apiUrl}`, data);
  }

  updateComment(data:CommentUpdateModel) : Observable<ResponseModel>{
    return this.http.put<ResponseModel>(`${this.apiUrl}`, data);
  }

  deleteComment(commentId: number) : Observable<ResponseModel>{
    return this.http.delete<ResponseModel>(`${this.apiUrl}${commentId}`);

  }
}
