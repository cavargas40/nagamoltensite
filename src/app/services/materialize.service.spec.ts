/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaterializeService } from './materialize.service';

describe('MaterializeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterializeService]
    });
  });

  it('should ...', inject([MaterializeService], (service: MaterializeService) => {
    expect(service).toBeTruthy();
  }));
});
