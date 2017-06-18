import { Component } from '@angular/core';

@Component({
  selector: 'y4f-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  links = [{
      uri: 'profile',
      text: 'Perfil',
      description: 'Detalles del perfil'
    },
    {
      uri: 'drivers',
      text: 'Listado de conductores',
      description: 'Acceso al listado de conductores'
    },
    {
      uri: 'profile',
      text: 'Coches activos',
      description: 'Localización de los coches activos'
    },
    {
      uri: 'invoices',
      text: 'Facturas',
      description: 'Acceso a listados de facturas'
    }];
}
