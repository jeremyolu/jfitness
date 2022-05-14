import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.css']
})
export class NotificationBannerComponent implements OnInit {

  @Input() title: string = "";
  @Input() isMarquee: boolean = false;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  notificationBarClick() {
    this.btnClick.emit();
  }

}
