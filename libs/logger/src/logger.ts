import { SeqTransport } from '@datalust/winston-seq';
import dotenv from 'dotenv';
import path from 'path';
import winston from 'winston';

const dotenvPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: dotenvPath });

if (!process.env.SEQ_SERVER_URL) {
  console.error(
    'Missing required environment variables for Seq logging: SEQ_SERVER_URL'
  );
  process.exit(1);
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.SEQ_LOG_LEVEL || 'silly',
      format: winston.format.cli(),
    }),
    new SeqTransport({
      level: process.env.SEQ_LOG_LEVEL || 'debug',
      serverUrl: process.env.SEQ_SERVER_URL,
      // apiKey: process.env.SEQ_API_KEY, // TODO: Add API key if needed
      onError: (e) => {
        console.error(e);
      },
      handleExceptions: true,
      handleRejections: true,
    }),
  ],
  exitOnError: false,
});

logger.info('Logger initialized at {url}', { url: process.env.SEQ_SERVER_URL });

export default logger;
