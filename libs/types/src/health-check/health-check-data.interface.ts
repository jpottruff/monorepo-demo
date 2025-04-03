import { HealthStatus } from './health-status.enum';

export interface HealthCheckData {
  application: string;
  serverStatus: HealthStatus;
  mongoStatus: HealthStatus;
}
