import { HealthCheckData, HealthStatus } from '@monorepo-demo/types';
import { NextFunction, Request, Response } from 'express';

class HealthCheckController {
  static getHealthCheck(_req: Request, res: Response, _next: NextFunction) {
    // TODO - implement mongoDB connection check
    const healthCheckResponse: HealthCheckData = {
      application: 'api-express',
      serverStatus: HealthStatus.ONLINE,
      mongoStatus: HealthStatus.DISCONNECTED,
    };
    res.json(healthCheckResponse);
  }
}

export default HealthCheckController;
