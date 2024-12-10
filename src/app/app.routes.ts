import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  {
    path: '', // ホーム画面
    component: MainContentComponent, // MainContentComponent を表示
  },
  {
    path: 'about', // About ページ
    component: AboutComponent, // AboutComponent を表示
  },
];
