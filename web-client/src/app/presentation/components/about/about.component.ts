import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { AttributeService } from '../../../application/attribute/attribute-application.service';
import { Attribute } from '../../../application/attribute/attribute-view.model';
import { UserService } from '../../../application/user/user-application.service';
import { User } from '../../../application/user/user-view.model';
import {
  DialogButton,
  DialogComponent,
} from '../../shared/dialog/dialog.component';
import { SelectorComponent } from '../../shared/selector/selector.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, DialogComponent, SelectorComponent],
})
export class AboutComponent {
  users: User[] = [];
  selectedUser: User | null = null;

  attributes: Attribute[] = [];

  isMenuOpen: boolean = false;

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
    this.attributes = this.attributeService.getAttributes();
  }

  addUser(name: string): void {
    this.userService.addUser(name);
    this.users = this.userService.getUsers();
  }

  openDeleteDialog(user: User): void {
    this.selectedUser = user;
    this.dialogTitle = 'ユーザー削除確認';
    this.dialogMessage = `本当にユーザー「${user.name}」を削除しますか？`;
    this.dialogButtons = [
      { label: '削除', action: 'delete', class: 'primary' },
      { label: 'キャンセル', action: 'cancel', class: 'secondary' },
    ];
    this.dialog.open(); // ダイアログを開く
  }

  handleDialogAction(action: string): void {
    if (action === 'delete' && this.selectedUser?.id !== null) {
      this.users = this.users.filter(
        (user) => user.id !== this.selectedUser?.id,
      );
      console.log(`User with ID ${this.selectedUser?.id} deleted.`);
    } else if (action === 'cancel') {
      console.log('Deletion cancelled.');
    }
  }

  openAttributeSelector(user: User): void {
    this.selectedUser = user;
    this.isMenuOpen = true;
  }

  closeAttributeSelector(): void {
    this.isMenuOpen = false;
  }

  handleSelection(option: string): void {
    if (this.selectedUser) {
      this.selectedUser.attributes.push({ value: option });
    }
    this.closeAttributeSelector();
  }
}
