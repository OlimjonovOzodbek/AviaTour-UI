import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tours/tour.service';
import { TourModel } from '../../../services/tours/interfaces/tourModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-tour',
  templateUrl: './dash-tour.component.html',
  styleUrl: './dash-tour.component.scss'
})
export class DashTourComponent implements OnInit{
  
  constructor(private _service : TourService,private router: Router){}

  datas !: TourModel[]; 

  ngOnInit(): void {
    this.getAll(1,10);
  }

  getAll(index:number,size:number){
    this._service.getAllTours(index,size).
    subscribe((data)=>{
      this.datas = data;
    });
  }
  redirectToSingle(id:number){
    this.router.navigateByUrl(`toursdash/${id}`);
  }
}
