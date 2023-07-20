import { ServerResponse } from 'http';
import { CustomIncomingMessage } from '../server';
import sendResponse from '../utils/sendResponse';

/**
 * Default fallback handler if there is no matched routes.
 */
const notFoundHandler = (req: CustomIncomingMessage, res: ServerResponse) => {
  sendResponse(res, 404, { message: 'No Routes found' });
};

export default notFoundHandler;
