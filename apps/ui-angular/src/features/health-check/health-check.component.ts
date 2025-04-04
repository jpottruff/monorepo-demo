import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { HealthCheckData, HealthStatus } from '@monorepo-demo/types';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { HealthCheckService } from './health-check.service';

@Component({
  selector: 'app-health-check',
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    TableModule,
  ],
  providers: [HealthCheckService],
  templateUrl: './health-check.component.html',
  styleUrl: './health-check.component.css',
})
export class HealthCheckComponent {
  healthCheckService = inject(HealthCheckService);

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
    const healthCheckData = await this.healthCheckService.getHealthCheckData();
    this.statusDetails.set(healthCheckData);
  }
}
