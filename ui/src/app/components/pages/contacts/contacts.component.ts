import { EmailAddressModel } from './../../../services/emails/interfaces/email-model';
import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../../../services/Contact/contactservice.service';
import { EmailserviceService } from '../../../services/emails/emailservice.service';
import { AddressService } from '../../../services/address/address.service';
import { AddressModel } from '../../../services/address/interfaces/address-model';
import { ContactModel } from '../../../services/Contact/interfaces/contact-model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'] // Corrected from styleUrl to styleUrls
})
export class ContactsComponent implements OnInit {
  address: AddressModel = {
    id: 0,
    door: "",
    street: "",
    district: "",
    zipCode: 0,
    city: "",
    latitude: 0,
    longitude: 0
  }

  contacts!: ContactModel[];
  emails!: EmailAddressModel[];

  constructor(
    private _contactService: ContactserviceService,
    private _emailService: EmailserviceService,
    private _addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.getAddress();
    this.getContact();
    this.getEmails();
  }

  getAddress() {
    this._addressService.GetAllAddress().subscribe((data) => {
      this.address = data[0];
    });
  }

  getContact() {
    this._contactService.GetAllContact().subscribe((data) => {
      this.contacts = data;
    });
  }

  getEmails() {
    this._emailService.GetAllEmails().subscribe((data) => {
      this.emails = data;
    });
  }
}
