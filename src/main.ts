import http from 'http';

import app from './app';
import * as config from './config';

const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});
