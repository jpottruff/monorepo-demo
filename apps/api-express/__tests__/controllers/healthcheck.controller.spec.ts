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

      expect(mockRes.json).toHaveBeenCalledWith({
        server: 'up',
        database: 'disconnected',
      });
    });
  });
});
