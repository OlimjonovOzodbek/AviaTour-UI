import { Component, OnInit } from '@angular/core';
import { TourService } from './services/tours/tour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private _service : TourService){}
  ngOnInit(): void {
    this._service.getAllTours(1,3).
    subscribe(
      (data)=>
      console.log(data)
      );
  }
  title = 'ui';
  
}
