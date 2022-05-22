import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = "";
  @Input() heading: string = "";
  @Input() tag: string = "";

  titleBtn: string = "Login";
  styleBtn: string = "yellow";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateLogin() {

    this.router.navigate(['login']);
  }

}
