import { Component, OnInit } from '@angular/core';
import { WowrealmstatusService } from '../../services/wowrealmstatus.service';
import { Wowrealmstatus } from '../../model/wowrealmstatus';

@Component({
  selector: 'app-wowrealmstatus',
  templateUrl: './wowrealmstatus.component.html',
  styleUrls: ['./wowrealmstatus.component.css']
})
export class WowrealmstatusComponent implements OnInit {

  realm: Wowrealmstatus = { status: false };

  constructor(private realmService: WowrealmstatusService) { }

  ngOnInit(): void {
    this.realmService.getRealmStatus().then(res => this.realm = res);
  }

}
