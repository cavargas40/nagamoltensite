import { Component, OnInit, ElementRef } from '@angular/core';
import { Raidguide, Raids } from '../../../model/raidguide';
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

  trialofvalorbosses: Raidguide[] = [{ boss_name: 'Odyn', boss_image: 'ui-ej-boss-odyn', url_video: 'ZS78mRperec' },
  { boss_name: 'Guarm', boss_image: 'ui-ej-boss-guarm', url_video: 'qnD_b4yTR2Q' },
  { boss_name: 'Helya', boss_image: 'ui-ej-boss-helya', url_video: 'zm3pcdk8H_A' }];

  nightholdbosses: Raidguide[] = [{ boss_name: 'Skorpyron', boss_image: 'ui-ej-boss-skorpyron', url_video: 'ulTuV-jfcVo' },
  { boss_name: 'Anomalía Cronomática', boss_image: 'ui-ej-boss-chronomatic-anomaly', url_video: 'wc2tcYv92RI' },
  { boss_name: 'Trilliax', boss_image: 'ui-ej-boss-trilliax', url_video: 'QvsJGIHm8F4' },
  { boss_name: 'Hoja de Hechizo Aluriel', boss_image: 'ui-ej-boss-spellblade-aluriel', url_video: 'qQ70WpnvYU8' },
  { boss_name: 'Krosus', boss_image: 'ui-ej-boss-krosus', url_video: 'rxIAezy4XIE' },
  { boss_name: 'Alto botanista Tel\'arn', boss_image: 'ui-ej-boss-botanist', url_video: 'BZPcrb1uDT4' },
  { boss_name: 'Tichondrius', boss_image: 'ui-ej-boss-tichondrius', url_video: 'mP7rr5Awads' },
  { boss_name: 'Adivino Etraeus', boss_image: 'ui-ej-boss-star-augur-etraeus', url_video: 'gDWuuL9hpIU' },
  { boss_name: 'Gran Magistrix Elisande', boss_image: 'ui-ej-boss-grand-magistrix-elisande', url_video: 'E-udWcRoI5k' },
  { boss_name: 'Gul\'dan', boss_image: 'ui-ej-boss-guldan', url_video: 'qlkX6b7TJwU' },
  ];

  raids: Raids[] = [{ name: 'Fortaleza Nocturna', raid: this.nightholdbosses, imgpath: 'nighthold' },
  { name: 'Prueba del Valor', raid: this.trialofvalorbosses, imgpath: 'trialofvalor' },
  { name: 'Pesadilla Esmeralda', raid: this.emeraldbosses, imgpath: 'emeraldnightmare' }] // = { raid : [ this.emeraldbosses, this.trialofvalorbosses, this.nightholdbosses ] };


  //https://www.youtube.com/watch?v=

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
}