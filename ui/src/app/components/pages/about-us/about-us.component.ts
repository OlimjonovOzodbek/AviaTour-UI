import { AboutUsModel } from './../../../services/abouts/interfaces/about-us-model';
import { Component } from '@angular/core';
import { AboutusService } from '../../../services/abouts/aboutus.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  constructor(private _aboutUsService: AboutusService) {
    this.getAll();
  }

  aboutas: AboutUsModel = {
    id: 0,
    description: ""
  }

  getAll() {
    this._aboutUsService.GetAllAboutUs().subscribe(
      (data) => {
        this.aboutas.description = data[0].description;
        this.aboutas.id = data[0].id
      }
    )
  }
}
