import { IncomingMessage, ServerResponse } from 'http';
import sendResponse from './utils/sendResponse';

/**
 * Initial interface of the router object
 */
interface Router {
  [key: string]: {
    [key: string]: (req: IncomingMessage, res: ServerResponse) => void;
  };
}

/**
 * Main router, where all the routes will be registered and handled
 */
const router: Router = {
  get: {
    '/users': (req, res) => {
      sendResponse(res, 200, { message: 'I am users' });
    },
    '/users/:id': (req, res) => {
      sendResponse(res, 200, { message: 'I am user with id' });
    },
    '/students': (req, res) => {
      sendResponse(res, 200, { message: 'I am students' });
    },
    '/students/:id': (req, res) => {
      sendResponse(res, 200, { message: 'I am student with id' });
    },
  },
};

export default router;
