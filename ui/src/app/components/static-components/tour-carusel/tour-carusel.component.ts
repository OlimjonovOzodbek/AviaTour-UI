import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tours/tour.service';
import { TourModel } from '../../../services/tours/interfaces/tourModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-carusel',
  templateUrl: './tour-carusel.component.html',
  styleUrls: ['./tour-carusel.component.scss']
})
export class TourCaruselComponent implements OnInit {

  size: number = 3;
  slides !: TourModel[];
  currentIndex: number = 0;

  constructor(private _service: TourService, private router: Router) { }

  ngOnInit(): void {
    this.getTours();
  }

  getTours(): void {
    this._service.getToursByTop(this.size).subscribe((data) => {
      this.slides = data;
    });
  }

  get transform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }

  navigateToTour(id: number): void {
    this.router.navigateByUrl(`/tours/${id}`);
  }
}