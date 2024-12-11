import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainContentComponent } from './components/main-content/main-content.component';

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
