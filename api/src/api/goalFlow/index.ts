import { Router } from 'express';
import { handleAsyncRequest } from '../../lib/handle-async-request';
import { authenticateToken } from '../../lib/middleware';
import GoalPlan from '../../models/goalFlow';

export class APIGOALPLAN {
    static instance(){
        const router = Router();

        //  Authentication needed from here
        router.use(authenticateToken)


        router.post('/', handleAsyncRequest(async(req, res)=>{
            const goal = await GoalPlan.create({UserId: req?.user?._id})
            console.log(goal)
            res.status(201).json({
                message: 'Success',
                data: goal
            })

        }))

        router.get('/', handleAsyncRequest(async(req, res)=>{
            const goalList = await GoalPlan.find({UserId: req?.user?._id })
            if(!goalList) throw Error("No Results.")
            
                res.status(200).json({
                    message: ' Success',
                    length: goalList.length,
                    data: goalList
                })
        })  )


        router.get('/:id', handleAsyncRequest(async(req, res)=>{
            
            const id = req.params.id
            const goal = await GoalPlan.findById(id)
            if(!goal)  throw new Error("No Results.")
            
            res.status(200).json({
                message: 'Success',
                data: goal
            })
        }))

        return router
        

    }

}