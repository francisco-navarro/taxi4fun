import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'y4f-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = 'Jorge Nitales';
  color;
  checked;
  disabled;

  ngOnInit(): void {
    console.log('ProfileComponent');
  }

}
