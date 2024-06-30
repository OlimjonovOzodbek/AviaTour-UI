import { Component, OnInit } from '@angular/core';
import { EmailserviceService } from '../../../services/emails/emailservice.service';
import { EmailAddressModel } from '../../../services/emails/interfaces/email-model';
import { CreateEmailModel } from '../../../services/emails/interfaces/create-emailModel';

@Component({
  selector: 'app-dashemail',
  templateUrl: './dashemail.component.html',
  styleUrl: './dashemail.component.scss'
})
export class DashemailComponent implements OnInit{
emails!: EmailAddressModel[]
  constructor(private service:EmailserviceService){

}
model: CreateEmailModel = { emailAddress: ""}
  ngOnInit(): void {
    this.getallEmails()
  }
getallEmails(){
  this.service.GetAllEmails().subscribe((data)=>{
    this.emails = data
  })
}
CreateEmail(){
  this.service.createEmail(this.model)
  .subscribe((data)=>{
    if(data.isSuccess == false){
      alert("Something went wrong!");
    }
    else{
      alert("Successfully added!")
    }
  });
}
}
