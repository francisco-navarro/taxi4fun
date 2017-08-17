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
    }];
}
