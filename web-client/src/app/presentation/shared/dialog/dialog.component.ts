import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  /** ダイアログのタイトル */
  @Input() title: string = '';
  /** ダイアログのメッセージ */
  @Input() message: string = '';
  /** ボタンリスト */
  @Input() buttons: { label: string; action: () => void; style?: string }[] =
    [];
  /** ダイアログを閉じるイベント*/
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
