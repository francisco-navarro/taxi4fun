import { Component, OnInit } from '@angular/core';
import { mapStyle } from './cars.mapStyle';
declare var google: any;



@Component({
  selector: 'y4f-call-taxi',
  templateUrl: './call-taxi.component.html',
  styleUrls: ['./call-taxi.component.css']
})
export class CallTaxiComponent implements OnInit {

  lat: number = 40.5129046;
  lng: number = -3.6753135;

  apiKey: String = '';

  mapStyle = mapStyle;

  map;


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
  }

}
