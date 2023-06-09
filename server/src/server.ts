
import { signalHandler } from './signalHandler';
import { startServer } from './httpAPI';


//start http server
const server = startServer();

// handle signals
signalHandler(server);

