import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  imports: [CommonModule],
})
export class SelectorComponent {
  @Input() title: string = ''; // ダイアログのタイトル
  @Input() options: string[] = []; // 選択肢
  @Input() isOpen: boolean = false; // メニューの開閉状態
  @Output() close = new EventEmitter<void>(); // メニューを閉じるイベント
  @Output() select = new EventEmitter<string>(); // 選択結果の通知

  onSelect(option: string): void {
    this.select.emit(option); // 選択結果を親コンポーネントに通知
    this.closeMenu();
  }

  closeMenu(): void {
    this.close.emit(); // メニューを閉じるイベントを通知
  }
}
