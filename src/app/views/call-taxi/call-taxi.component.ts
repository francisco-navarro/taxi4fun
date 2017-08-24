import { Component, OnInit } from '@angular/core';
import { mapStyle } from './cars.mapStyle';
declare var google: any;



@Component({
  selector: 'y4f-call-taxi',
  templateUrl: './call-taxi.component.html',
  styleUrls: ['./call-taxi.component.css']
})
export class CallTaxiComponent implements OnInit {

  lat: number = 40.4070466;
  lng: number = -3.7000443;

  apiKey: String = '';

  mapStyle = mapStyle;

  map;

  cars = [
    {lat: 40.5053907,lng: -3.6724659, status: 'call_made'},
    {lat: 40.5140601,lng: -3.6817367, status: 'call_made'}
  ];

  constructor() { }

  ngOnInit() {
    // Otra manera de meter el script al cargar la operativa
    // var s = document.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=initMap';
    // this.elementRef.nativeElement.appendChild(s);
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: this.lat, lng: this.lng},
      zoom: 15,
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
