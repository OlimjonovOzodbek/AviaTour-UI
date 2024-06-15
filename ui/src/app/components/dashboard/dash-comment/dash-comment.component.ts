import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comments/comment.service';
import { CommentModel } from '../../../services/comments/interfaces/comment-model';

@Component({
  selector: 'app-dash-comment',
  templateUrl: './dash-comment.component.html',
  styleUrl: './dash-comment.component.scss'
})
export class DashCommentComponent {

  comments !: CommentModel[];
  tourid : number = 0

  constructor(private _service: CommentService) { }

  getCommentsByTourId() {
    this._service.getCommetsByTourId(this.tourid).
      subscribe(
      (data) => {
        this.comments = data;
      }
    )
  }

  deleteComment(id:number){
    this._service.deleteComment(id)
    .subscribe((data) =>{
      if(data.isSuccess == false){
        alert(`${data.message}`)
      }
      else{
        alert("Deleted")
      }
    }
    )
  }
}
