import { Component, OnInit } from '@angular/core';
import { GuildMembersService } from '../../services/guild-members.service';
import { GuildMember } from '../../model/guild-member';

@Component({
  selector: 'app-guild-members',
  templateUrl: './guild-members.component.html',
  styleUrls: ['./guild-members.component.css']
})
export class GuildMembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
}
