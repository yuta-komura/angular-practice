import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // HeaderComponent をインポート
import { AboutComponent } from './about/about.component'; // AboutComponent をインポート
import { MainContentComponent } from './main-content/main-content.component';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common'; // CommonModule をインポート
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // スタンドアロンを有効化
  imports: [CommonModule, RouterOutlet, HeaderComponent], // RouterModule.forRoot(routes) は削除
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  addUser() {
    this.userService.addUser('New User');
    this.users = this.userService.getUsers();
  }
}
