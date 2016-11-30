/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WowtokenService } from './wowtoken.service';

describe('WowtokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WowtokenService]
    });
  });

  it('should ...', inject([WowtokenService], (service: WowtokenService) => {
    expect(service).toBeTruthy();
  }));
});
