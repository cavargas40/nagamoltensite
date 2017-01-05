import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../../services/';

declare var jQuery: any;

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private el: ElementRef,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.parallax').parallax();
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
          //muestra un mensaje de que se creo correctamente y mantiene el mensaje despues de redireccionar a la pagina del login
          this.alertService.success('Se registro correctamente', true);
          this.router.navigate(['/login']);
      },
      error => {
          this.alertService.error(error);
          this.loading=false;          
      });
  }

}
