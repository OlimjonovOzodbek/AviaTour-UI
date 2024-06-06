import { Component, OnInit } from '@angular/core';
import { TourService } from './services/tours/tour.service';
import { ContactserviceService } from './services/Contact/contactservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private _service : ContactserviceService){}
  ngOnInit(): void {
    this._service.GetAllContact().
    subscribe(
      (data)=>
      console.log(data)
      );
  }
  title = 'ui';
}
