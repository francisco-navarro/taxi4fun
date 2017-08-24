import { Component } from '@angular/core';

@Component({
  selector: 'y4f-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
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
}
