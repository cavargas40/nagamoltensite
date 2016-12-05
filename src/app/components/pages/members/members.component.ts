import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { GuildMembersService } from '../../../services/guild-members.service';
import { Member, Character, Spec } from '../../../model/member';

declare var jQuery: any;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],

})
export class MembersComponent implements OnInit {

  guildmembers: Member[];

  sliderValue: number = 20

  constructor(private el: ElementRef, private memberService: GuildMembersService, private locat: Location) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.parallax').parallax();
    this.memberService.getGuildMembers().then(member => this.guildmembers = member);
    //this.memberService.getTopGuildMembers(110).then(member => this.guildmembers = member)
  }

  abretesesamo(member: Member): void {
    let link = "";
    if(member.character.level>100)
    {
      //link = "http://www.wow-heroes.com/character/us/Ragnaros/" + member.character.name + "/" //wow heroes
      link = "http://us.battle.net/wow/es/character/ragnaros/"+member.character.name+"/simple"  //wow armory
      window.open(link);
    }
    else
    {
      window.alert("Debe ser minimo nivel 100");
    }
  }
}