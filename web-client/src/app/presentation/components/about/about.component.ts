import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../../application/user/user-application.service';
import { User } from '../../../application/user/user-view.model';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, MatDialogModule],
})
export class AboutComponent {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  addUser(name: string): void {
    this.userService.addUser(name);
    this.users = this.userService.getUsers();
  }

  openDeleteDialog(user: User): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: '削除確認',
        message: `本当に ${user.name} を削除しますか？`,
        buttons: [
          {
            label: 'キャンセル',
            action: () => console.log('キャンセルされました'),
            style: '#ccc',
          },
          {
            label: '削除',
            action: () => {
              this.userService.removeUser(user.id);
              this.users = this.userService.getUsers();
            },
            style: 'red',
          },
        ],
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('ダイアログが閉じられました');
    });
  }
}
