import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'y4f-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  links = [{
    uri: 'profile',
    text: 'Perfil',
    icon: 'assignment',
    description: 'Detalles del perfil'
  },{
    uri: 'call-taxi',
    text: 'Viaje',
    icon: 'settings_phone',
    description: 'Pedir un taxi'
  },{
    uri: 'cars',
    text: 'Coches',
    icon: 'assignment_return',
    description: 'Gestionar mis coches'
  }];

  constructor() { }

  ngOnInit() {
  }

}
