import { initLogger } from '@monorepo-demo/logger';
import app from './app';

const log = initLogger('app-server');

const PORT = 3000;
app.listen(PORT, () => {
  log.info(`Server is starting on port ${PORT}`, { port: PORT });
});
