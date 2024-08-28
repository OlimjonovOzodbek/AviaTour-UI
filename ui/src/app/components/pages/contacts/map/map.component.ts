import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() latitude: number = 41.299496;
  @Input() longitude: number = 69.240074;

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    const map = L.map('map').setView([this.latitude, this.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([this.latitude, this.longitude]).addTo(map)
      .bindPopup('Your Location')
      .openPopup();
  }
}
