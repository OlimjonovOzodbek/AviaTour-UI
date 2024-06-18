import { CommentCreateModel } from './../../../services/comments/interfaces/comment-create-model';
import { Subject } from 'rxjs';
import { BookingService } from './../../../services/booking/booking.service';
import { TourModel } from './../../../services/tours/interfaces/tourModel';
import { Component, Input, OnInit } from '@angular/core';
import { TourService } from '../../../services/tours/tour.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentModel } from '../../../services/comments/interfaces/comment-model';
import { BookingModel } from '../../../services/booking/interfaces/booking-model';
import { CommentService } from '../../../services/comments/comment.service';

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrl: './single-tour.component.scss'
})
export class SingleTourComponent implements OnInit{

  constructor(private tourService : TourService,private _commentService : CommentService, private route: ActivatedRoute,private _bookingService : BookingService,private router: Router){ }
  
  book : BookingModel={
    name:"",
    email:"",
    phoneNumber:"",
    tourName:""
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.tourId = params.get('id');
      if(this.tourId != null){
        try{
          this.tourService.getTourById(+this.tourId)
          .subscribe((data)=>{
            this.tour = data;
            this.comments = this.tour.comments;
          });
        }
        catch{
          console.log("Something went wrong!")
        }
      }
      else{
        this.router.navigateByUrl('**')
      }});
      this.changeTo();
    }

  tourId : string  | null = "";
  tour !: TourModel;
  comments !: CommentModel[]

  myComment : CommentCreateModel={
    from : '',
    message:'',
    tourId:0
  };

  addMyComment(){
      this.myComment.tourId = +this.tourId!;
      this._commentService.createComment(this.myComment)
      .subscribe((data)=>{
        if(data.isSuccess == false){
          alert("Something went wrong!");
        }
        else{
          alert("Successfully added!")
        }
      });
  }
  
  bookTour(){
    this.book.tourName = this.tour.whereEx;
    this._bookingService.postBooking(this.book);
  }

  changeTo(){
    var item : string | null = localStorage.getItem("revordesc");
    if(item == "rev")
      localStorage.setItem("revordesc","desc");
    else if(item == "desc")
      localStorage.setItem("revordesc","rev");
    else
      localStorage.setItem("revordesc","desc")
  }

  getFormattedPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  isDescriptionVisible(): boolean {
    return localStorage.getItem('revordesc') === 'desc';
  }
}
