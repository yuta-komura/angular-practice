import { Injectable } from '@angular/core';
import { User } from '../../domain/user/user.model'; // Userモデルをインポート

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice', attributes: [] },
    { id: 2, name: 'Bob', attributes: [] },
    { id: 3, name: 'Charlie', attributes: [] },
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
      attributes: [],
    };
    this.users.push(newUser);
  }

  // ユーザーを削除
  removeUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
    console.log(`User with ID ${id} deleted.`);
  }
}
