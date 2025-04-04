import cors from 'cors';
import express, { Application } from 'express';
import connectDatabases from './databases';
import healthCheckRoutes from './routes/healthcheck.routes';

const app: Application = express();

(async () => {
  await connectDatabases();
})();

// TODO - this should be tightened up
app.use(
  cors({
    origin: '*',
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

app.use(express.json());

// Routes
app.use('/api/healthcheck', healthCheckRoutes);

export default app;
