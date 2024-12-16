import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true, // 必要なら追加
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // ルートから渡されたデータを取得
    this.route.data.subscribe((data) => {
      this.title = data['title'];
      this.description = data['description'];
    });
  }
}
