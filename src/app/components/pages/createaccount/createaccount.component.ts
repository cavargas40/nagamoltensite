import { Component, OnInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.parallax').parallax();
  }

}
