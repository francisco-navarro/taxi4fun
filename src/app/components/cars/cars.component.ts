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
    {lat: 40.71031250340588,lng: -73.93592834472656, status: 'call_made'},
    {lat: 40.71811937975345,lng: -73.98536682128906, status: 'call_merge'},
    {lat: 40.73216945026674,lng: -73.98605346679688, status: 'call_missed'},
    {lat: 40.71031250340588,lng: -73.93592834472656, status: 'call_merge'},
    {lat: 40.71811937975345,lng: -73.98536682128906, status: 'call_received'},
    {lat: 40.73216945026674,lng: -73.98605346679688, status: 'call_split'},
    {lat: 40.71031250340588,lng: -73.93592834472656, status: 'call_made'},
    {lat: 40.71811937975345,lng: -73.98536682128906, status: 'call_merge'},
    {lat: 40.73216945026674,lng: -73.98605346679688, status: 'call_missed'},
    {lat: 40.71811937975345,lng: -73.98536682128906, status: 'call_received'},
    {lat: 40.73216945026674,lng: -73.98605346679688, status: 'call_merge'}
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
  }

}
