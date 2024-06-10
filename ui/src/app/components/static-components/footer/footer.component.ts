import { Component, OnInit } from '@angular/core';
import { AboutusService } from '../../../services/abouts/aboutus.service';
import { AboutUsModel } from '../../../services/abouts/interfaces/about-us-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  aboutUs !: AboutUsModel[]

  constructor(private aboutService : AboutusService){ }

  ngOnInit(): void {
    this.aboutService.GetAllAboutUs()
      .subscribe((data)=>{
        this.aboutUs = data;
      });
  }
}