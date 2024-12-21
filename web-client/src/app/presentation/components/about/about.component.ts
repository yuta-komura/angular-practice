import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../application/user/user-application.service';
import { User } from '../../../application/user/user-view.model';
import { DialogComponent } from '../../../presentation/shared/dialog/dialog.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  users: User[] = []; // User型の配列
  selectedUser: { id: number; name: string } | null = null;
  showDialog: boolean = false;

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

  onDeleteClick(user: { id: number; name: string }): void {
    this.selectedUser = user;
    this.showDialog = true;
  }

  getDialogButtons(): { label: string; action: () => void; style?: string }[] {
    return [
      {
        label: 'キャンセル',
        action: () => {
          this.showDialog = false;
        },
        style: '#ccc', // ボタン背景色（任意）
      },
      {
        label: '実行',
        action: () => {
          if (this.selectedUser) {
            this.userService.removeUser(this.selectedUser.id);
            this.users = this.userService.getUsers(); // リスト更新
          }
          this.showDialog = false;
        },
        style: 'red', // ボタン背景色（任意）
      },
    ];
  }
}
