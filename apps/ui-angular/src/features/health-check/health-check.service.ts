import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HealthCheckData, HealthStatus } from '@monorepo-demo/types';
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
      this.httpClient.get<HealthCheckData[]>(`${baseUrl}${endpoint}`)
    );
    console.log(data);
    return stubData();
  }
}

function stubData(): HealthCheckData[] {
  return [
    {
      application: 'Application 1',
      serverStatus: HealthStatus.ONLINE,
      mongoStatus: HealthStatus.CONNECTED,
    },
    {
      application: 'Application 2',
      serverStatus: HealthStatus.OFFLINE,
      mongoStatus: HealthStatus.DISCONNECTED,
    },
    {
      application: 'Application 3',
      serverStatus: HealthStatus.ONLINE,
      mongoStatus: HealthStatus.CONNECTED,
    },
  ];
}
