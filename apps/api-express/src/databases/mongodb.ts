import { initLogger } from '@monorepo-demo/logger';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

const log = initLogger('database.mongodb');

const dotenvPath = path.resolve(__dirname, '../../../../.env');
dotenv.config({ path: dotenvPath });

if (
  !process.env.MONGO_USER ||
  !process.env.MONGO_PW ||
  !process.env.MONGO_SERVER ||
  !process.env.MONGO_PORT
) {
  log.error('Missing required environment variables for MongoDB connection');
  process.exit(1);
}

const DATABASE_NAME = 'monorepo-demo-db';
const DATABASE_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_SERVER}:${process.env.MONGO_PORT}/${DATABASE_NAME}${process.env.MONGO_OPTS}`;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    log.info('MongoDB connected');
  } catch (err) {
    log.error('MongoDB connection failed!', err);
    process.exit(1);
  }
};

export default connectMongoDB;
