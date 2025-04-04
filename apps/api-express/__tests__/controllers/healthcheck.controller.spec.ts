import { HealthCheckData, HealthStatus } from '@monorepo-demo/types';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { getHealthCheck } from '../../src/controllers/healthcheck.controller';

describe('HealthCheckController', () => {
  const mockReq = {} as Request;
  const mockRes = {
    json: jest.fn(),
  } as unknown as Response;
  const mockNext = jest.fn() as NextFunction;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getHealthCheck()', () => {
    it('should return server and database status', () => {
      // Mock mongoose connection state to ONLINE (1)
      Object.defineProperty(mongoose.connection, 'readyState', {
        value: 1,
        configurable: true,
      });

      const expectedResponse: HealthCheckData = {
        application: 'api-express',
        serverStatus: HealthStatus.ONLINE,
        mongoStatus: HealthStatus.CONNECTED,
      };

      getHealthCheck(mockReq, mockRes, mockNext);
      expect(mockRes.json).toHaveBeenCalledWith(expectedResponse);
    });
  });
});
