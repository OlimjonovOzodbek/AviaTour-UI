import { TourModel } from './../../../services/tours/interfaces/tourModel';
import { Component, Input, OnInit } from '@angular/core';
import { TourService } from '../../../services/tours/tour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrl: './single-tour.component.scss'
})
export class SingleTourComponent implements OnInit{

  constructor(private tourService : TourService, private route: ActivatedRoute){ }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.tourId = params.get('id');
      if(this.tourId != null){
        try{
          this.tourService.getTourById(+this.tourId)
          .subscribe((data)=>{
            this.tour = data;
          });
        }
        catch{
          console.log("something went wrong!")
        }
      }});
    }

  tourId : string  | null = "";
  tour !: TourModel;
}
