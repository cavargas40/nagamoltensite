import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Wowtoken } from './wowtoken';

@Injectable()
export class WowtokenService {
  private wowtokeninfo = 'https://wowtoken.info/snapshot.json'; //URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getTokenPrice(): Promise<Wowtoken> {
    return this.http
      .get(this.wowtokeninfo)
      .toPromise()
      .then((res) => res.json().NA.formatted)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has ocurred', error); //con proposito de demostracion unicamente
    return Promise.reject(error.message || error);
  }

}
