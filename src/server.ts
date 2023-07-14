import http from 'http';
import parseParams from './lib/parseParam';
import router from './router';

const universalRequestHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  //extract url and method from the request
  const url = req.url as string;
  const method = req.method?.toLowerCase() as string;

  //extract url and methods
  const urlChunks = url.split('/');

  //find all routes for the requested method
  const routes = router[method];

  //loop through all the routes and invoke the right route
  for (const route in routes) {
    const routeChunks = route.split('/');

    //if the route base is not same then break the loop
    if (urlChunks[1] !== routeChunks[1]) break;

    //parse params
    const params = parseParams(url, route);

    //if there is no params then invoke the corresponding route
    if (urlChunks.length === routeChunks.length && !params) {
      return routes[route](req, res);
    }
    //if there params then invoke the corresponding route with parsed parameters
    if (urlChunks.length === routeChunks.length && params) {
      return routes[route](req, res, params);
    }
  }
};

const server = http.createServer(universalRequestHandler);
server.listen(5000, () => console.log(`server is alive on PORT:5000`));
