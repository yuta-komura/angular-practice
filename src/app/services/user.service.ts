import { Injectable } from '@angular/core';
import { User } from './models/user.model'; // Userモデルをインポート

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  // ユーザーリストを取得
  getUsers(): User[] {
    return this.users;
  }

  // 新しいユーザーを追加
  addUser(name: string): void {
    const newUser: User = {
      id: this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1,
      name: name,
    };
    this.users.push(newUser);
  }

  // ユーザーを削除
  removeUser(index: number): void {
    this.users.splice(index, 1);
  }
}
