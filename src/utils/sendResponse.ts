import { ServerResponse } from 'http';

/**
 * Util function to send response in json
 */
const sendResponse = (res: ServerResponse, statusCode: number, data: object = {}) => {
  res.setHeader('Content-Type', 'application/json');
  const jsonData = JSON.stringify(data);
  res.end(jsonData);
};

export default sendResponse;
