import { Component, OnInit } from '@angular/core';
import { EmailserviceService } from '../../../services/emails/emailservice.service';
import { EmailAddressModel } from '../../../services/emails/interfaces/email-model';

@Component({
  selector: 'app-dashemail',
  templateUrl: './dashemail.component.html',
  styleUrl: './dashemail.component.scss'
})
export class DashemailComponent implements OnInit{
emails!: EmailAddressModel[]
  constructor(private service:EmailserviceService){

}
  ngOnInit(): void {
    this.getallEmails()
  }
getallEmails(){
  this.service.GetAllEmails().subscribe((data)=>{
    this.emails = data
  })
}
}
