import { CommonModule } from '@angular/common'; // CommonModule をインポート
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './application/user/user-application.service';
import { User } from './application/user/user-view.model';
import { HeaderComponent } from './presentation/components/header/header.component'; // HeaderComponent をインポート

@Component({
  selector: 'app-root',
  standalone: true, // スタンドアロンを有効化
  imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  addUser() {
    this.userService.addUser('New User');
    this.users = this.userService.getUsers();
  }
}
