import { Component, OnInit, ElementRef } from '@angular/core';
import { Raidguide } from '../../../model/raidguide';
//import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

declare var jQuery: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
  
})
export class IndexComponent implements OnInit {

  emeraldbosses: Raidguide[] = [{ boss_name: 'Nythendra', boss_image: 'ui-ej-boss-nythendra', url_video: 'n9dk_aOgWzE' },
  { boss_name: 'Il\'gynoth, Corazon de la corrupción', boss_image: 'ui-ej-boss-ilgynoth-heart-of-corruption', url_video: 'Wy7UshIvRyo' },
  { boss_name: 'Elerethe Renferal', boss_image: 'ui-ej-boss-elerethe-renferal', url_video: 'f7lhzlnnQW4' },
  { boss_name: 'Ursoc', boss_image: 'ui-ej-boss-ursoc', url_video: 'AQd5kdJ7OlE' },
  { boss_name: 'Dragones de Pesadilla', boss_image: 'ui-ej-boss-dragons-of-nightmare', url_video: '11tSo8-Mey8' },
  { boss_name: 'Cenarius', boss_image: 'ui-ej-boss-cenarius', url_video: '1C4ijqIgytk' },
  { boss_name: 'Xavius', boss_image: 'ui-ej-boss-xavius', url_video: 'qpwb60z6bvw' }];

  current_url: string = 'https://www.youtube.com/embed/n9dk_aOgWzE?rel=0';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.parallax').parallax();
    jQuery(this.el.nativeElement).find('.modal').modal();
  }

  openVideo(boss: Raidguide): void {
    this.current_url = "https://www.youtube.com/embed/" + boss.url_video + "?rel=0";
    //this.current_url = this.domSanitizer.bypassSecurityTrustUrl("//www.youtube.com/embed/" + boss.url_video + "?rel=0");
  }

  // sanitize(url:string){
  //   return this.domSanitizer.bypassSecurityTrustUrl(url);
  // }





}
