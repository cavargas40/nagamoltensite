import { Component, OnInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.parallax').parallax();
  }
}
