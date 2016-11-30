import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

//import 'rxjs/add/operator/do'; //debug
import 'rxjs/add/operator/toPromise';

import { Wowtoken } from '../model/wowtoken';
import { AppError } from '../util/app-error';

@Injectable()
export class WowtokenService {
  private wowtokeninfo = 'https://wowtoken.info/snapshot.json'; //URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private ups: AppError) { }

  getTokenPrice(): Promise<Wowtoken> {
    return this.http
      .get(this.wowtokeninfo)
      .toPromise()
      .then((res) => res.json().NA.formatted)
      .catch(this.ups.handleError);
  }
}
