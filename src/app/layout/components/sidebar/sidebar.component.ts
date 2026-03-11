import { Component } from '@angular/core';

// Material
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatListModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
