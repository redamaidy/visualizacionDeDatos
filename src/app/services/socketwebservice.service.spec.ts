import { TestBed } from '@angular/core/testing';

import { SocketwebserviceService } from './socketwebservice.service';

describe('SocketwebserviceService', () => {
  let service: SocketwebserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketwebserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
