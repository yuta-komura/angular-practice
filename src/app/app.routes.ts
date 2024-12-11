import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
