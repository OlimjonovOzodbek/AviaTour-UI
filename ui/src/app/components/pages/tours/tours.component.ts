import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tours/tour.service';
import { TourModel } from '../../../services/tours/interfaces/tourModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent implements OnInit{
  
  constructor(private _service : TourService,private router: Router){}
  ngOnInit(): void {
    this.getAll();
  }
  tours !: TourModel[]

  getAll(){
    this._service.getAllTours(1, 10).subscribe(
      (data)=>{
        this.tours = data;
      }
    );
  }

  redirectToSingle(id:number){
    this.router.navigateByUrl(`tours/${id}`);
  }
}
