import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Wowrealmstatus } from '../model/wowrealmstatus';
import { AppError } from '../util/app-error';

@Injectable()
export class WowrealmstatusService {
  private wowapiurl = 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=h4aadjq89dt2v85y895xh34ud88nu73v&realm=ragnaros'; //URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private ups: AppError) { }

  getRealmStatus(): Promise<Wowrealmstatus> {
    return this.http
      .get(this.wowapiurl)
      .toPromise()
      .then((res) => res.json().realms[0])
      .catch(this.ups.handleError);
  }
}
