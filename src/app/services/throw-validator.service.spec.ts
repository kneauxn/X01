/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThrowValidatorService } from './throw-validator.service';

describe('Service: ThrowValidator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThrowValidatorService]
    });
  });

  it('should ...', inject([ThrowValidatorService], (service: ThrowValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
