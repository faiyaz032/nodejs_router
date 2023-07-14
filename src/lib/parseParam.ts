/**
 * This function parse parse parameters from the url and return parameters as key:value pair
 */
const parseParams = (url: string, route: string) => {
  //split the url and route chunks
  const urlChunks = url.split('/');
  const routeChunks = route.split('/');

  //check if the routes and url are in same base
  if (routeChunks[1] !== urlChunks[1]) return false;

  //check if the length are equal if not then return false
  if (urlChunks.length !== routeChunks.length) return null;

  //params object
  const params: { [key: string]: string } = {};

  routeChunks.forEach((chunk, index) => {
    //prepare the parameter in key:value object
    if (chunk.startsWith(':')) {
      const paramName = routeChunks[index].substring(1);
      params[paramName] = urlChunks[index];
    }
  });

  //return parameters
  return params;
};

export default parseParams;
