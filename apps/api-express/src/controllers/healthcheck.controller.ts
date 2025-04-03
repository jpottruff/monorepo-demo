import { NextFunction, Request, Response } from 'express';

class HealthCheckController {
  static getHealthCheck(_req: Request, res: Response, _next: NextFunction) {
    const serverStatus = 'up';
    // TODO Replace with actual MongoDB connection check
    const mongoStatus = 'disconnected';
    res.json({ server: serverStatus, database: mongoStatus });
  }
}

export default HealthCheckController;
