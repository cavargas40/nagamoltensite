import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { GuildMembersService, MaterializeService } from '../../../services/';
import { Member, Character, Spec } from '../../../model/member';

declare var jQuery: any;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']

})
export class MembersComponent implements OnInit {

  //public data = new Product(); // [{ available: false, best_seller: false, categories: [0, 0], description: '', id: 0, img: '', name: '', price: 0 }];;
  public guildmembers: Member[] = [];
  public filterQuery = "";
  public rowsOnPage = 15;
  public sortBy = "character.name";
  public sortOrder = "asc";
  public SpecSelected: number = -1;
  
  //public loadall = true;

  constructor(private el: ElementRef, private memberService: GuildMembersService, private locat: Location, private material:MaterializeService) { }

  ngOnInit() {    
      jQuery(this.el.nativeElement).find('.parallax').parallax();
      this.memberService.getGuildMembers().then(member => this.guildmembers = member);  
      //this.memberService.getGuildMembers().then(member => this.guildmembers = member.slice(0,10));  
  }

  ViewCharacter(member: Member): void {
    let link = "";
    if (member.character.level > 20) {
      //link = "http://www.wow-heroes.com/character/us/Ragnaros/" + member.character.name + "/" //wow heroes
      link = "http://us.battle.net/wow/es/character/ragnaros/" + member.character.name + "/simple"  //wow armory
      window.open(link);
    }
    else {
      this.material.toast('Para ver el personaje debes ser minimo lvl 20.', 4500, 'rounded')
      //window.alert("Debe ser minimo nivel 20");
    }
  }

  // loadMore(){
  //   //console.log("load more");
    
  //   this.memberService.getGuildMembers().then(member => this.guildmembers = member);

  //   this.loadall = false;


  // }
}