import { Component, OnInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
  }
}
