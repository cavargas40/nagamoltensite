import { Component, OnInit, ElementRef } from '@angular/core';

declare var jQuery : any;

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.parallax').parallax();
    jQuery(this.el.nativeElement).find('body').css('background-color', '#212121');
  }

}
