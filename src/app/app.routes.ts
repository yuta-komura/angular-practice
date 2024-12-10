import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  {
    path: '', // ホーム画面
    component: MainContentComponent, // メインコンテンツ
  },
  {
    path: 'about', // About ページ
    component: AboutComponent, // About ページ
  },
];
