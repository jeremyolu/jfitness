import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title: string = "";
  @Input() styleClass: string = "";

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent() {
    this.btnClick.emit();
    console.log("button clicked");
  }

}
