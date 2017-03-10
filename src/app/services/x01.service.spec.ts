/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { X01Service } from './x01.service';

describe('Service: X01', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [X01Service]
    });
  });

  it('should ...', inject([X01Service], (service: X01Service) => {
    expect(service).toBeTruthy();
  }));
});
