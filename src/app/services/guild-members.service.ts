import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member } from '../model/member';
import { AppError } from '../util/app-error';


@Injectable()
export class GuildMembersService {

  private wowapiurl = 'https://us.api.battle.net/wow/guild/ragnaros/NagaMolten?fields=members&locale=es_MX&apikey=h4aadjq89dt2v85y895xh34ud88nu73v'; //URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  //thumbnail viewer -> http://render-api-us.worldofwarcraft.com/static-render/us/ragnaros/101/80604005-avatar.jpg
  //spec icon -> http://media.blizzard.com/wow/icons/36/spell_holy_guardianspirit.jpg

  constructor(private http: Http, private ups : AppError) { }

  getGuildMembers(): Promise<Member[]> {
    return this.http
      .get(this.wowapiurl)
      .toPromise()
      .then((res) => res.json().members as Member[])
      .catch(this.ups.handleError);
  }

  getTopGuildMembers(lvl: number):Promise<Member[]>{
    return this.getGuildMembers().then(members => members.find(member=>member.character.level === Number(lvl)));
  }

}
