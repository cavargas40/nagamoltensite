import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Wowrealmstatus } from './wowrealmstatus';
@Injectable()
export class WowrealmstatusService {
  private wowapiurl = 'https://us.api.battle.net/wow/realm/status?locale=en_US&realm=ragnaros&apikey=6z5b2w4rbczvp2a5g6jsgn8weztjz7xp'; //URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getRealmStatus(): Promise<Wowrealmstatus> {
    return this.http
      .get(this.wowapiurl)
      .toPromise()
      .then((res) => res.json().realms[0])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has ocurred', error); //con proposito de demostracion unicamente
    return Promise.reject(error.message || error);
  }


}
