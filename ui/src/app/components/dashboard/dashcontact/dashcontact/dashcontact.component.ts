import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../../../services/Contact/interfaces/contact-model';
import { ContactserviceService } from '../../../../services/Contact/contactservice.service';

@Component({
  selector: 'app-dashcontact',
  templateUrl: './dashcontact.component.html',
  styleUrl: './dashcontact.component.scss'
})
export class DashcontactComponent implements OnInit {
contact!: ContactModel[]
constructor(private service: ContactserviceService){
}
ngOnInit(): void {
  this.getallContacts()
}
getallContacts(){
this.service.GetAllContact().subscribe((data)=>{
this.contact = data})
}
}
