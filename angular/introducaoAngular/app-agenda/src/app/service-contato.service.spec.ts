import { TestBed } from '@angular/core/testing';

import { ServiceContatoService } from './service-contato.service';

describe('ServiceContatoService', () => {
  let service: ServiceContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
