import { IncomingMessage, ServerResponse } from 'http';
import sendResponse from '../utils/sendResponse';

/**
 * Default fallback handler if there is no matched routes.
 */
const notFoundHandler = (req: IncomingMessage, res: ServerResponse) => {
  sendResponse(res, 404, { message: 'No Routes found' });
};

export default notFoundHandler;
