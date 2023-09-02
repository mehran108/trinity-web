/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrinityService } from './trinity.service';

describe('Service: Trinity', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrinityService]
    });
  });

  it('should ...', inject([TrinityService], (service: TrinityService) => {
    expect(service).toBeTruthy();
  }));
});
