import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    data: {
      title: 'メインコンテンツ',
      description: 'Angularで開発',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
