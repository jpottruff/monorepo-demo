import { HealthCheckData, HealthStatus } from '@monorepo-demo/types';
import { NextFunction, Request, Response } from 'express';
import HealthCheckController from '../../src/controllers/healthcheck.controller';

describe('HealthCheckController', () => {
  const mockReq = {} as Request;
  const mockRes = {
    json: jest.fn(),
  } as unknown as Response;
  const mockNext = jest.fn() as NextFunction;

  describe('getHealthCheck()', () => {
    it('should return server and database status', () => {
      HealthCheckController.getHealthCheck(mockReq, mockRes, mockNext);

      const expectedResponse: HealthCheckData = {
        application: 'api-express',
        serverStatus: HealthStatus.ONLINE,
        mongoStatus: HealthStatus.DISCONNECTED,
      };

      expect(mockRes.json).toHaveBeenCalledWith(expectedResponse);
    });
  });
});
