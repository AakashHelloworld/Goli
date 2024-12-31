import { Router } from 'express';
import { handleAsyncRequest } from '../../lib/handle-async-request';
import { authenticateToken } from '../../lib/middleware';
import GoalPlan from '../../models/goalFlow';
import Node from '../../models/node';
export class APIGOALPLAN {
    static instance(){
        const router = Router();

        //  Authentication needed from here
        router.use(authenticateToken)

        //  Create new Plan       
        router.post('/', handleAsyncRequest(async(req, res)=>{
            const goal = await GoalPlan.create({UserId: req?.user?._id})
            res.status(201).json({
                message: 'Success',
                data: goal
            })

        }))

        // Get plan list of particular user
        router.get('/', handleAsyncRequest(async(req, res)=>{
            const goalList = await GoalPlan.find({UserId: req?.user?._id })
            if(!goalList) throw Error("No Results.")
            
                res.status(200).json({
                    message: ' Success',
                    length: goalList.length,
                    data: goalList
                })
        })  )


        // detail of one Particular project
        router.get('/:id', handleAsyncRequest(async(req, res)=>{
            
            const id = req.params.id
            const goal = await GoalPlan.findById(id)
            if(!goal)  throw new Error("No Results.")
            let allNodes = goal.Content.nodes;
            let allNodesData = []
            if(allNodes.length > 0){
     
                for(let i = 0; i < allNodes.length; i++){
                    let node = await Node.find({NodeReference : allNodes[i]?.id})
                    if (node.length > 0) {
                        allNodesData.push(node[0])
                    }
                }
            }



            
            res.status(200).json({
                message: 'Success',
                data: {
                    goal,
                    allNodesData
                }

            })
        }))


        // update the plan project
        router.patch('/:id', handleAsyncRequest(async(req, res)=>{
            const id = req.params.id;
            const goal = await GoalPlan.findById(id)
            if(!goal) throw new Error("No Particular Projects Exist.") 
            const updatedGoal = await GoalPlan.findByIdAndUpdate(id, {...req.body})
            res.status(200).json({
                message: 'Success',
                data: updatedGoal

            })
        }))


        return router
        

    }

}