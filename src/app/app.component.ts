import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // HeaderComponent をインポート
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true, // スタンドアロンを有効化
  imports: [RouterOutlet, HeaderComponent, MainContentComponent], // HeaderComponent を登録
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
