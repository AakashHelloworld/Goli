import { Router } from 'express';
import { handleAsyncRequest } from '../../lib/handle-async-request';


export class APIGOLI {
    static instance(){
        const router = Router();

        router.get('', handleAsyncRequest(async(req)=>{

                

        }) )


        

    }

}