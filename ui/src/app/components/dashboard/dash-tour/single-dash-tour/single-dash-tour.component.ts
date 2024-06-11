import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../../services/tours/tour.service';
import { TourModel } from '../../../../services/tours/interfaces/tourModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentModel } from '../../../../services/comments/interfaces/comment-model';

@Component({
  selector: 'app-single-dash-tour',
  templateUrl: './single-dash-tour.component.html',
  styleUrl: './single-dash-tour.component.scss'
})
export class SingleDashTourComponent implements OnInit{
  constructor(private _service : TourService, private route : ActivatedRoute,private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.tourId = params.get('id');
      if(this.tourId != null){
        try{
          this._service.getTourById(+this.tourId)
          .subscribe((data)=>{
            this.tour = data;
            this.comments = data.comments;
          });
        }
        catch{
          console.log("something went wrong!")
        }
      }});
  }

  tourId : string | null = '';
  tour !: TourModel;
  comments !: CommentModel[];

  changeTo(){
    var item : string | null = localStorage.getItem("revordesc");
    if(item == "rev")
      localStorage.setItem("revordesc","desc");
    else if(item == "desc")
      localStorage.setItem("revordesc","rev");
    else
      localStorage.setItem("revordesc","desc")
  }

  deleteTour(id:number){
    this._service.deleteTour(id).subscribe((data)=>{
      console.log(data);
    });
    this.router.navigateByUrl("/toursdash");
  }

  isDescriptionVisible(): boolean {
    return localStorage.getItem('revordesc') === 'desc';
  }

}
