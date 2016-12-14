import { Component, OnInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit() {
     jQuery(this.el.nativeElement).find('.parallax').parallax();

     
  }

}
