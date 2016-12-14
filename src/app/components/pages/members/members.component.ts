import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { GuildMembersService } from '../../../services/guild-members.service';
import { Member, Character, Spec } from '../../../model/member';

declare var jQuery: any;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']

})
export class MembersComponent implements OnInit {

  guildmembers: Member[];
  public loadall = true;

  pager = {
    limit: 10, //este es el numpero por defecto de integrantes a cargar
    current: 0 //pagina actual
  };

  query = {
    limit: this.pager.limit,
    skip: this.pager.limit * this.pager.current
  };
  

  constructor(private el: ElementRef, private memberService: GuildMembersService, private locat: Location) { }

  ngOnInit() {    
    try {
      jQuery(this.el.nativeElement).find('.parallax').parallax();
      this.memberService.getGuildMembers().then(member => this.guildmembers = member.slice(0,10));  
    } catch (error) {
      console.log("Ups!: ", error)
    }    
  }

  abretesesamo(member: Member): void {
    let link = "";
    if (member.character.level > 20) {
      //link = "http://www.wow-heroes.com/character/us/Ragnaros/" + member.character.name + "/" //wow heroes
      link = "http://us.battle.net/wow/es/character/ragnaros/" + member.character.name + "/simple"  //wow armory
      window.open(link);
    }
    else {
      window.alert("Debe ser minimo nivel 20");
    }
  }

  loadMore(){
    //console.log("load more");
    
    this.memberService.getGuildMembers().then(member => this.guildmembers = member);

    this.loadall = false;


  }

  getAll(){

  }
}