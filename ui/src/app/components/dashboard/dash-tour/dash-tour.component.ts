import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tours/tour.service';
import { TourModel } from '../../../services/tours/interfaces/tourModel';
import { Router } from '@angular/router';
import { TourCreateModel } from '../../../services/tours/interfaces/tour-create-model';

@Component({
  selector: 'app-dash-tour',
  templateUrl: './dash-tour.component.html',
  styleUrl: './dash-tour.component.scss'
})
export class DashTourComponent implements OnInit{

  constructor(private _service : TourService,private router: Router){}

  datas !: TourModel[];
  createModel: TourCreateModel = {
    WhereEx: '',
    Where: '',
    Subtitle: '',
    Description: '',
    Price: 0,
    PicturePath: undefined
  };

  ngOnInit(): void {
    this.getAll(1,10);
  }

  getAll(index:number,size:number){
    this._service.getAllTours(index,size).
    subscribe((data)=>{
      this.datas = data;
    });
  }
  redirectToSingle(id:number){
    this.router.navigateByUrl(`toursdash/${id}`);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.createModel.PicturePath = file;
    }
  }

  createTour() {
    if (this.isCreateModelValid()) {
      const formData = new FormData();
      formData.append('WhereEx', this.createModel.WhereEx);
      formData.append('Where', this.createModel.Where);
      formData.append('Subtitle', this.createModel.Subtitle);
      formData.append('Description', this.createModel.Description);
      formData.append('Price', this.createModel.Price.toString());
      if (this.createModel.PicturePath) {
        formData.append('PicturePath', this.createModel.PicturePath);
      }
      this._service.createTour(formData).subscribe((data) => {
        console.log(data);
      }, error => {
        console.error('Update failed:', error);
      });
    } else {
      console.error('Update model is not valid:', this.createModel);
    }
  }

  isCreateModelValid(): boolean | string{
    return this.createModel.WhereEx && this.createModel.Where &&
           this.createModel.Subtitle && this.createModel.Description &&
           this.createModel.PicturePath !== undefined;
  }
}
