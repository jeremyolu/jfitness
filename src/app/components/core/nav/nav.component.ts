import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  constructor(private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
  }

  toggleMobileNav(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  toggleSearch(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'top' });
  }

  toggleShoppingBasket(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { scroll: true });
  }

}
