import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HealthCheckComponent } from '../../features/health-check/health-check.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HealthCheckComponent, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
