import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true, // 必要なら追加
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
