import { ServerResponse } from 'http';
import { CustomIncomingMessage } from './server';
import sendResponse from './utils/sendResponse';

/**
 * Initial interface of the router object
 */
interface Router {
  [key: string]: {
    [key: string]: (req: CustomIncomingMessage, res: ServerResponse) => void;
  };
}

/**
 * Main router, where all the routes will be registered and handled
 */
const router: Router = {
  get: {
    '/users': (req, res) => {
      console.log('hitting');
      sendResponse(res, 200, { message: 'I am users' });
    },
    '/users/:id/:name': (req, res) => {
      console.log('params', req.params);
      sendResponse(res, 200, { message: 'I am user with id', data: req.params });
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
