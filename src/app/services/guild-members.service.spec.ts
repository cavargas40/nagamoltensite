/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuildMembersService } from './guild-members.service';

describe('GuildMembersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuildMembersService]
    });
  });

  it('should ...', inject([GuildMembersService], (service: GuildMembersService) => {
    expect(service).toBeTruthy();
  }));
});
