import { Routes } from '@angular/router';

// Components
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: []
    }
];
