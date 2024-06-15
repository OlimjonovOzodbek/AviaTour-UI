import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../../services/tours/tour.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TourModel } from '../../../../services/tours/interfaces/tourModel';
import { TourUpdateModel } from './../../../../services/tours/interfaces/tour-update-model';
import { CommentModel } from '../../../../services/comments/interfaces/comment-model';

@Component({
  selector: 'app-single-dash-tour',
  templateUrl: './single-dash-tour.component.html',
  styleUrls: ['./single-dash-tour.component.scss']
})
export class SingleDashTourComponent implements OnInit {
  constructor(private _service: TourService, private route: ActivatedRoute, private router: Router) { }

  tourId: string | null = '';
  tour: TourModel = {
    id: 0,
    whereEx: '',
    where: '',
    subtitle: '',
    description: '',
    price: 0,
    picturePath: '',
    comments: [],
    isDeleted:false,
    createdAt:'',
    modifiedAt:'',
    deletedAt:''
  };
  comments: CommentModel[] = [];

  updateModel: TourUpdateModel = {
    id: 0,
    WhereEx: '',
    Where: '',
    Subtitle: '',
    Description: '',
    Price: 0,
    PicturePath: undefined
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tourId = params.get('id');
      if (this.tourId != null) {
        this._service.getTourById(+this.tourId).subscribe((data) => {
          this.tour = data;
          this.comments = data.comments;
          this.updateModel.id = data.id;
          this.updateModel.WhereEx = data.whereEx;
          this.updateModel.Where = data.where;
          this.updateModel.Subtitle = data.subtitle;
          this.updateModel.Description = data.description;
          this.updateModel.Price = data.price;
        }, error => {
          console.log("something went wrong!", error);
        });
      }
    });
  }

  updateTour() {
    if (this.isUpdateModelValid()) {
      const formData = new FormData();
      formData.append('Id', this.updateModel.id.toString());
      formData.append('WhereEx', this.updateModel.WhereEx);
      formData.append('Where', this.updateModel.Where);
      formData.append('Subtitle', this.updateModel.Subtitle);
      formData.append('Description', this.updateModel.Description);
      formData.append('Price', this.updateModel.Price.toString());
      if (this.updateModel.PicturePath) {
        formData.append('PicturePath', this.updateModel.PicturePath);
      }

      this._service.updateTour(formData).subscribe((data) => {
        console.log(data);
      }, error => {
        console.error('Update failed:', error);
      });
    } else {
      console.error('Update model is not valid:', this.updateModel);
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.updateModel.PicturePath = file;
    }
  }

  isUpdateModelValid(): boolean | string{
    return this.updateModel.WhereEx && this.updateModel.Where &&
           this.updateModel.Subtitle && this.updateModel.Description &&
           this.updateModel.PicturePath !== undefined;
  }
  isDescriptionVisible(): boolean {
    return localStorage.getItem('revordesc') === 'desc';
  }
  changeTo() {
    var item: string | null = localStorage.getItem("revordesc");
    if (item == "rev") {
      localStorage.setItem("revordesc", "desc");
    } else if (item == "desc") {
      localStorage.setItem("revordesc", "rev");
    } else {
      localStorage.setItem("revordesc", "desc");
    }
  }
  deleteTour(id: number) {
    this._service.deleteTour(id).subscribe((data) => {
      console.log(data);
    });
    this.router.navigateByUrl("/toursdash");
  }
}
