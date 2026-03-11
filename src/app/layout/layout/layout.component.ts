import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';

// Components
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule, 
    MatSidenavModule,  
    HeaderComponent, 
    SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
