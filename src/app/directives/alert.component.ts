import { Component, OnInit, ElementRef } from '@angular/core';

import { AlertService } from '../services/';

declare var Materialize: any;

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService,
        private el: ElementRef) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message });        
        //Materialize.toast(this.message, 5000);
    }

    // load() {
        
    // }
}