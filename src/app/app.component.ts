import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {} from '';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('parallax') div: ElementRef;
  @ViewChild('parallax2') div2: ElementRef;
  @ViewChild('parallax3') div3: ElementRef;
  @ViewChild('buttoncollapse') butt: ElementRef;

  ngAfterViewInit() {
    jQuery(this.div.nativeElement).parallax();
    jQuery(this.div2.nativeElement).parallax();
    jQuery(this.div3.nativeElement).parallax();
    jQuery(this.butt.nativeElement).sideNav();
  }
}
