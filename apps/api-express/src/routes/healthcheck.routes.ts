import express from 'express';
import { getHealthCheck } from '../controllers/healthcheck.controller';

const router = express.Router();

router.get('', getHealthCheck);

export default router;
