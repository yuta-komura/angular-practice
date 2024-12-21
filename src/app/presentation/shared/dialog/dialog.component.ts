import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Input() title: string = ''; // ダイアログのタイトル
  @Input() message: string = ''; // ダイアログのメッセージ
  @Input() buttons: { label: string; action: () => void; style?: string }[] =
    []; // ボタンリスト
  @Output() close = new EventEmitter<void>(); // ダイアログを閉じるイベント

  onClose(): void {
    this.close.emit();
  }
}
