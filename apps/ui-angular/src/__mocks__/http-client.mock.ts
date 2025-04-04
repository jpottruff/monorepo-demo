import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

/**
 * Mock HttpClient with testing backend for unit tests.
 */
export function mockHttpClientDeps() {
  return [
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClientTesting(),
  ];
}
