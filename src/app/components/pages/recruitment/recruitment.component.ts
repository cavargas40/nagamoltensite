import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  //@ViewChild('iframe') iframe:ElementRef;

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  // onLoad() {
  //   try {
  //   //var iframe = document.getElementById('RectruitmentFrame');
  //   var iWindow = this.iframe.nativeElement.contentWindow;
  //   var doc = this.iframe.nativeElement.contentDocument ||this.iframe.nativeElement.contentWindow.document;
  //   //    console.log(doc.getElementById('').innerText);
  //   console.log(doc.getElementByClassName("button-wrapper by"));    
      
  //   } catch (error) {
  //     console.log("GGException - "+error);      
  //   }

  //}

}
