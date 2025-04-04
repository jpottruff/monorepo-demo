import connectMongoDB from './mongodb';

const connectDatabases = async () => {
  await connectMongoDB();
  // Add additional database connections here...
};

export default connectDatabases;
