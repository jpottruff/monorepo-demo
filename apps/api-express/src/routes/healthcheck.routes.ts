import express from 'express';
import HealthCheckController from '../controllers/healthcheck.controller';

const router = express.Router();

router.get('', HealthCheckController.getHealthCheck);

export default router;
