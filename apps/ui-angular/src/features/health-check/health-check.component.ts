import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

interface HealthCheckData {
  application: string;
  serverStatus: HealthStatus;
  mongoStatus: HealthStatus;
}

enum HealthStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
}

@Component({
  selector: 'app-health-check',
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    TableModule,
  ],
  templateUrl: './health-check.component.html',
  styleUrl: './health-check.component.css',
})
export class HealthCheckComponent {
  HealthStatus = HealthStatus;
  visible = signal<boolean>(false);
  statusDetails = signal<HealthCheckData[]>([]);

  async openDialog(): Promise<void> {
    this.visible.set(true);
    await this.healthCheck();
  }

  hideDialog(): void {
    this.visible.set(false);
  }

  private async healthCheck(): Promise<void> {
    const healthCheckData = stubData();
    this.statusDetails.set(healthCheckData);
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
