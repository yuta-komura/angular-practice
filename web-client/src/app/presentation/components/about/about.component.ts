import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../../application/user/user-application.service';
import { User } from '../../../application/user/user-view.model';
import {
  DialogButton,
  DialogComponent,
} from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, DialogComponent],
})
export class AboutComponent {
  users: User[] = [];

  selectedUserId: number | null = null;

  dialogTitle = '';
  dialogMessage = '';
  dialogButtons: DialogButton[] = [];

  @ViewChild('dialog') dialog!: DialogComponent;

  constructor(
    private userService: UserService,
    private attributeService: AttributeService,
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  addUser(name: string): void {
    this.userService.addUser(name);
    this.users = this.userService.getUsers();
  }

  openDeleteDialog(user: any): void {
    this.selectedUserId = user.id;
    this.dialogTitle = 'ユーザー削除確認';
    this.dialogMessage = `本当にユーザー「${user.name}」を削除しますか？`;
    this.dialogButtons = [
      { label: '削除', action: 'delete', class: 'primary' },
      { label: 'キャンセル', action: 'cancel', class: 'secondary' },
    ];
    this.dialog.open(); // ダイアログを開く
  }

  handleDialogAction(action: string): void {
    if (action === 'delete' && this.selectedUserId !== null) {
      this.users = this.users.filter((user) => user.id !== this.selectedUserId);
      console.log(`User with ID ${this.selectedUserId} deleted.`);
    } else if (action === 'cancel') {
      console.log('Deletion cancelled.');
    }
  }
}
