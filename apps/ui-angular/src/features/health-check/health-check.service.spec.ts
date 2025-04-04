import { TestBed } from '@angular/core/testing';
import { mockHttpClientDeps } from '../../__mocks__/http-client.mock';
import { HealthCheckService } from './health-check.service';

describe('HealthCheckService', () => {
  let service: HealthCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthCheckService, ...mockHttpClientDeps()],
    });
    service = TestBed.inject(HealthCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
