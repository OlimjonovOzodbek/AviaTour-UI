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
export class AppComponent {
  title = 'ui';
}
