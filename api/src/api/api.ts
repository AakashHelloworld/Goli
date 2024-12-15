
import { Router } from 'express';
import { APIUser } from './user';
import { handleAsyncRequest, APIError } from '../lib/handle-async-request';


export class APIRouter {
    static async instance() {
        const router = Router();

        router.use('/auth', APIUser.instance());

        // Fall back to 404 for anything else
        router.use(notFound);
        
        return router
    
    }
}



const notFound = handleAsyncRequest(() => {
    throw new APIError(404, 'Not Found');
  });
  