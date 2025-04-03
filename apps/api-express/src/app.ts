import express, { Application } from 'express';
import healthCheckRoutes from './routes/healthcheck.routes';

const app: Application = express();
app.use(express.json());

// Routes
app.use('/api/healthcheck', healthCheckRoutes);

export default app;
