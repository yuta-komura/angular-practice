import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface DialogButton {
  label: string; // ボタンのラベル
  action: string; // ボタンのアクション名
  class?: string; // ボタンのCSSクラス（任意）
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  imports: [CommonModule],
})
export class DialogComponent {
  @Input() title: string = '確認'; // ダイアログのタイトル
  @Input() message: string = 'この操作を実行しますか？'; // ダイアログのメッセージ
  @Input() buttons: DialogButton[] = []; // ボタンリスト
  @Output() buttonClick = new EventEmitter<string>(); // ボタンがクリックされたときのイベント

  isVisible = false;

  open(): void {
    this.isVisible = true;
  }

  close(): void {
    this.isVisible = false;
  }

  onButtonClick(action: string): void {
    this.buttonClick.emit(action); // アクション名を親に送信
    this.close(); // ダイアログを閉じる
  }
}
