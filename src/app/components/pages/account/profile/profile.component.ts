import { Component, OnInit, ElementRef } from '@angular/core';
import { Auth } from '../../../../services/';

declare var jQuery:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;

  constructor(private auth:Auth, private el:ElementRef) {     
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.parallax').parallax();
  }

}
