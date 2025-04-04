import { HealthCheckData, HealthStatus } from '@monorepo-demo/types';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export const getHealthCheck = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const healthCheckResponse: HealthCheckData = {
    application: 'api-express',
    serverStatus: HealthStatus.ONLINE,
    mongoStatus: getMongoStatus(),
  };
  res.json(healthCheckResponse);
};

const getMongoStatus = (): HealthStatus => {
  switch (mongoose.connection.readyState) {
    case 0:
      return HealthStatus.DISCONNECTED;
    case 1:
      return HealthStatus.CONNECTED;
    case 2:
      return HealthStatus.CONNECTING;
    case 3:
      return HealthStatus.DISCONNECTING;
    default:
      return HealthStatus.UNKNOWN;
  }
};

// export default HealthCheckController;
