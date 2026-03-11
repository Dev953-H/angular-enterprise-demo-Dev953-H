import { Component } from '@angular/core';

// Material
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
