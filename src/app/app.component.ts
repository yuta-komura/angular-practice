import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // HeaderComponent をインポート
import { MainContentComponent } from './main-content/main-content.component';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common'; // CommonModule をインポート

@Component({
  selector: 'app-root',
  standalone: true, // スタンドアロンを有効化
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainContentComponent], // HeaderComponent を登録
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
