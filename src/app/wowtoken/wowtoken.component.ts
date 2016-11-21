import { Component, OnInit } from '@angular/core';
import { WowtokenService } from '../wowtoken.service';
import { Wowtoken } from '../wowtoken';

@Component({
  selector: 'app-wowtoken',
  templateUrl: './wowtoken.component.html',
  styleUrls: ['./wowtoken.component.css']
})
export class WowtokenComponent implements OnInit {

  token: Wowtoken = { buy: '' };

  constructor(private tokenService: WowtokenService) { }

  ngOnInit(): void {
    this.tokenService.getTokenPrice().then(token => this.token = token);
  }
  

}
