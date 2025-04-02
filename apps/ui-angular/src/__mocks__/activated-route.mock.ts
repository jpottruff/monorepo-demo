import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

/**
 * Mock ActivatedRoute for unit tests.
 * @param params Optional route parameters.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mockActivatedRoute(params: Record<string, any> = {}) {
  return {
    provide: ActivatedRoute,
    useValue: {
      params: of(params),
      snapshot: { paramMap: { get: (key: string) => params[key] || null } },
    },
  };
}
