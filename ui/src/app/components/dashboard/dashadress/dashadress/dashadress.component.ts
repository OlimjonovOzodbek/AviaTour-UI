import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../../../../services/address/interfaces/address-model';
import { AddressService } from '../../../../services/address/address.service';

@Component({
  selector: 'app-dashadress',
  templateUrl: './dashadress.component.html',
  styleUrl: './dashadress.component.scss'
})
export class DashadressComponent implements OnInit {
address!: AddressModel[]
constructor(private service: AddressService){
  
}
ngOnInit(): void {
  this.getallAddress()
}
getallAddress(){
  this.service.GetAllAddress().subscribe((data)=>{
    this.address = data
  })
}
}
