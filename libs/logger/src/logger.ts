import { SeqTransport } from '@datalust/winston-seq';
import dotenv from 'dotenv';
import path from 'path';
import winston from 'winston';

// Environment variables
const dotenvPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: dotenvPath });

if (!process.env.SEQ_SERVER_URL) {
  console.error(
    'Missing required environment variables for Seq logging: SEQ_SERVER_URL'
  );
  process.exit(1);
}

// Formatting
const { combine, timestamp, json, errors } = winston.format;

export const initLogger = (
  callingContext: string,
  metadata?: Record<string, unknown>
): winston.Logger => {
  const defaultMeta = {
    context: callingContext ?? 'logger',
    ...metadata,
  };

  const logger = winston.createLogger({
    defaultMeta,
    format: combine(errors({ stack: true }), timestamp(), json()),
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
    // TODO - this might not be best practice; look into appropriate handling
    exitOnError: false,
  });

  logger.silly(`Logger initialized for ${callingContext}`, {
    seq_url: process.env.SEQ_SERVER_URL,
  });

  return logger;
};
