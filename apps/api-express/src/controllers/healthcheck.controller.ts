import { initLogger } from '@monorepo-demo/logger';
import { HealthCheckData, HealthStatus } from '@monorepo-demo/types';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const log = initLogger('healthcheck.controller');

export const getHealthCheck = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  log.debug('Doing health check');
  const healthCheckResponse: HealthCheckData = {
    application: 'api-express',
    serverStatus: HealthStatus.ONLINE,
    mongoStatus: getMongoStatus(),
  };
  res.json(healthCheckResponse);
};

const getMongoStatus = (): HealthStatus => {
  log.debug('Checking MongoDB status');
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
