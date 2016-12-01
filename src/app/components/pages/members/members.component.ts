import { Component, OnInit, ElementRef } from '@angular/core';
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

  constructor(private el: ElementRef, private memberService: GuildMembersService) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.parallax').parallax();
    this.memberService.getGuildMembers().then(member => this.guildmembers = member);
    //this.memberService.getTopGuildMembers(110).then(member => this.guildmembers = member)
  }

}
