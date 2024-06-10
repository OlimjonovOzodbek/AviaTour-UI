import { Component, OnInit } from '@angular/core';
import { TourService } from './services/tours/tour.service';
import { ContactserviceService } from './services/Contact/contactservice.service';
import { ContactCreate } from './services/Contact/interfaces/contact-create';
import { AddressService } from './services/address/address.service';
import { EmailserviceService } from './services/emails/emailservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private _service : EmailserviceService){}
  ngOnInit(): void {
    this._service.GetAllEmails().
    subscribe(
      (data)=>
      console.log(data)
      );
  }
  title = 'ui';
}
