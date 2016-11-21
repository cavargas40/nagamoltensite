/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WowrealmstatusService } from './wowrealmstatus.service';

describe('WowrealmstatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WowrealmstatusService]
    });
  });

  it('should ...', inject([WowrealmstatusService], (service: WowrealmstatusService) => {
    expect(service).toBeTruthy();
  }));
});
