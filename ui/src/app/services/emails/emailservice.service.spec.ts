import { TestBed } from '@angular/core/testing';

import { EmailserviceService } from './emailservice.service';

describe('EmailserviceService', () => {
  let service: EmailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
