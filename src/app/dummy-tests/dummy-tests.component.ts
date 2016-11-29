import { Component, AfterViewInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-dummy-tests',
  templateUrl: './dummy-tests.component.html',
  styleUrls: ['./dummy-tests.component.css']
})
export class DummyTestsComponent implements AfterViewInit {
  //@ViewChild('input') input: ElementRef;
  showGreeting: boolean = true;
  cars: string[] = ['Lamborgini', 'Mazda', 'Renault'];

  constructor(private renderer: Renderer) { }

  ngAfterViewInit() {
    //this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }

  clicked() {
    this.showGreeting = !this.showGreeting;
  }

}
