import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response, _next: NextFunction) => {
  res.json({ message: 'Hello from the Express API! ...with TypeScript' });
});

app.get('/api/healthcheck', async (req, res) => {
  const serverStatus = 'up';
  // TODO Replace with actual MongoDB connection check
  const mongoStatus = 'disconnected';
  res.json({ server: serverStatus, database: mongoStatus });
});

export default app;
