import { Component, OnInit, ElementRef } from '@angular/core';

import { mapStyle } from './cars.mapStyle';
declare var google: any;

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  lat: number = 40.724364221722716;
  lng: number = -73.93386840820312;

  apiKey: String = '';

  mapStyle = mapStyle;

  map;

  cars = [
    {lat: 40.726929,lng: -73.940735, status: 'call_made'},
    {lat: 40.722116 , lng: -73.946228, status: 'call_merge'},
    {lat: 40.719774 , lng: -73.93713, status: 'call_missed'},
    {lat: 40.716261 , lng: -73.941936, status: 'call_merge'},
    {lat: 40.738506 , lng: -73.934383, status: 'call_received'},
    {lat: 40.744099 , lng: -73.956356, status: 'call_split'},
    {lat: 40.742278 , lng: -73.959446, status: 'call_made'},
    {lat: 40.745920 , lng: -73.969746, status: 'call_merge'},
    {lat: 40.724978 , lng: -73.933697, status: 'call_missed'},
    {lat: 40.739287 , lng: -73.935928, status: 'call_received'}
  ];


  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    //TODO get key
  }
  
  ngAfterViewInit() {
    // Otra manera de meter el script al cargar la operativa
    // var s = document.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=initMap';
    // this.elementRef.nativeElement.appendChild(s);
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: this.lat, lng: this.lng},
      zoom: 13,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      styles: this.mapStyle
    });
    this.cars.forEach(car => this.drawPoint(car));
  }

  drawPoint(car) {
    // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    return new google.maps.Marker({
        position: {lat: car.lat,lng: car.lng},
        map: this.map,
        animation: google.maps.Animation.DROP,
        // icon: image
        icon: {
          path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
          strokeColor: '#ed6e65',
          scale: 2
        }
      });
  }

}
