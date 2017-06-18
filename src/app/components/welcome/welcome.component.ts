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
      icon: 'assignment',
      description: 'Detalles del perfil'
    },
    {
      uri: 'drivers',
      text: 'Listado de conductores',
      icon: 'rowing',
      description: 'Acceso al listado de conductores'
    },
    {
      uri: 'cars',
      text: 'Coches activos',
      icon: 'directions_car',
      description: 'Localización de los coches activos'
    },
    {
      uri: 'invoices',
      text: 'Facturas',
      icon: 'library_books',
      description: 'Acceso a listados de facturas'
    },
    {
      uri: 'invoices',
      text: 'Clientes',
      icon: 'library_books',
      description: 'Acceso a listados de clientes'
    }];
}
