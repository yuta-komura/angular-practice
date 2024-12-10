import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'], // 修正: styleUrls に変更
})
export class MainContentComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
