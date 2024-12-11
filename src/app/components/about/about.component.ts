import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../services/models/user.model'; // Userモデルをインポート
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], // CommonModule をインポート
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  users: User[] = []; // User型の配列

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers(); // 初期データを取得
  }

  addUser(name: string): void {
    this.userService.addUser(name); // サービスで新しいユーザーを追加
    this.users = this.userService.getUsers(); // データを再取得
  }

  removeUser(index: number): void {
    this.userService.removeUser(index); // サービスでユーザーを削除
    this.users = this.userService.getUsers(); // データを再取得
  }
}
