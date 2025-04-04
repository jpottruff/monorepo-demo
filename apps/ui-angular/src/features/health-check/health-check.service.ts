import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HealthCheckData } from '@monorepo-demo/types';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthCheckService {
  httpClient = inject(HttpClient);

  async getHealthCheckData(): Promise<HealthCheckData[]> {
    const baseUrl = 'http://localhost:3000';
    const endpoint = '/api/healthcheck';

    const data = await lastValueFrom(
      this.httpClient.get<HealthCheckData>(`${baseUrl}${endpoint}`)
    );
    return [data];
  }
}
