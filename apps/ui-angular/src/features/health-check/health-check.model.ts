export interface HealthCheckData {
  application: string;
  serverStatus: HealthStatus;
  mongoStatus: HealthStatus;
}

export enum HealthStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
}
