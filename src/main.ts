import http from 'http';
import mongoose from 'mongoose';

import app from './app';
import * as config from './config';

async function main() {
  // Connect to MongoDB
  mongoose.set('strictQuery', false);
  const conn = await mongoose.connect(config.MONGO_URI);
  console.log(
    `Connected to MongoDB at ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`
  );

  // Start the server
  const server = http.createServer(app);
  server.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`);
  });
}

main().catch((err) => {
  console.error(err);
});
