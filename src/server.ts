import http from 'http';
import router from './router';

const universalRequestHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  //extract url and method from the request
  const url = req.url as string;
  const method = req.method?.toLowerCase() as string;

  //find all routes for the requested method
  const routes = router[method];

  //TODO: Initial requirements to create a basic router mechanism
  // loop through all the routes and matchRoute if exists
  // if route does not exists on the router then fallback to notFoundHandler
  // parse parameter from the url
  // parse quey from the url
};

const server = http.createServer(universalRequestHandler);
server.listen(5000, () => console.log(`server is alive on PORT:5000`));
