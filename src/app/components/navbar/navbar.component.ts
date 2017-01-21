import { Component, OnInit, ElementRef } from '@angular/core';
import { Auth } from '../../services/';
import { Router } from '@angular/router';


declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  profile: any;

  constructor(private el: ElementRef,
    private auth: Auth,
    private router: Router) {
  }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
    //jQuery(this.el.nativeElement).find('.dropdown-button').dropdown();
  }

  logoutNM() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
