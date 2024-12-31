import {Router} from "express"
import { handleAsyncRequest } from '../../lib/handle-async-request';
import { authenticateToken } from '../../lib/middleware';
import Node from "../../models/node";


export class APIResource {
    static instance() {
        const router = Router();
        
        //  Authentication needed from here
        router.use(authenticateToken)

        //  Create new Resource       
        router.post('/:id', handleAsyncRequest(async(req, res)=>{
            const NodeID = req.params.id
            console.log(req.body, NodeID)
            const node = await Node.findOne({NodeReference: NodeID});
            if(!node) {
               throw new Error('Node not found')
            }
            console.log(node)
            const resource =  node.Resources.push(req.body)
            await node?.save()
            console.log(resource)
            res.status(201).json({
                message: 'Success',
                data: node
            })
        }))

        //  Delete Resource

        router.delete('/:id/:taskId', handleAsyncRequest(async(req, res)=>{
            const NodeID = req.params.id
            const resourceID = req.params.taskId
            const node = await Node.findOne({NodeReference: NodeID});
            if(!node) {
               throw new Error('Node not found')
            }
            const resource =  node.Resources.find(task => task._id == resourceID)
            if(!resource) {
               throw new Error('Resource not found')
            }
            node.Resources = node.Resources.filter(task => task._id != resourceID)
            await node?.save()
            res.status(201).json({
                message: 'Success',
                data: node
            })
        }))



        return router
    }
}