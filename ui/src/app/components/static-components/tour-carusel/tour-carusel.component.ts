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

  size: number = 5;
  slides: TourModel[] = [];
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

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  navigateToTour(id: number): void {
    this.router.navigateByUrl(`/tours/${id}`);
  }
}