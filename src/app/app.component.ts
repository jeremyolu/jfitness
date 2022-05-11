import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'jfitness';

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