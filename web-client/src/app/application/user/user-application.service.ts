import { Injectable } from '@angular/core';
import { User } from './user-view.model'; // Userモデルをインポート

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice', attribute: null },
    { id: 2, name: 'Bob', attribute: null },
    { id: 3, name: 'Charlie', attribute: null },
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
  removeUser(id: number): void {
    const targetIndexUser: number = this.users.findIndex(
      (user) => user.id === id,
    );
    console.log('削除対象ユーザー', targetIndexUser);
    this.users.splice(targetIndexUser, 1);
  }
}
