import {Router} from "express"
import { handleAsyncRequest } from '../../lib/handle-async-request';
import { authenticateToken } from '../../lib/middleware';
import Node from "../../models/node";


export class APITask {
    static instance() {
        const router = Router();
        
        //  Authentication needed from here
        router.use(authenticateToken)

        //  Create new Task       
        router.post('/:id', handleAsyncRequest(async(req, res)=>{
            const NodeID = req.params.id
            console.log(req.body, NodeID)
            const node = await Node.findOne({NodeReference: NodeID});
            if(!node) {
               throw new Error('Node not found')
            }
            console.log(node)
            const task =  node.TaskContainer.push(req.body)
            await node?.save()
            console.log(task)
            res.status(201).json({
                message: 'Success',
                data: node
            })
        }))

        //  Update Task       
        router.patch('/:id/:taskId', handleAsyncRequest(async(req, res)=>{
            const NodeID = req.params.id
            const TaskID = req.params.taskId
            const node = await Node.findOne({NodeReference: NodeID});
            if(!node) {
               throw new Error('Node not found')
            }
            const task =  node.TaskContainer.find(task => task._id == TaskID)
            if(!task) {
                throw new Error('Task not found')
            }
            console.log(req.body)
            task.Name = req?.body?.Name ? req.body.Name : task.Name
            task.Completed = req?.body?.Completed == false ? false : req?.body?.Completed == true ? true : task.Completed
            await node?.save()
            res.status(201).json({
                message: 'Success',
                data: node
            })
        }))

        //  Delete Task

        router.delete('/:id/:taskId', handleAsyncRequest(async(req, res)=>{
            const NodeID = req.params.id
            const TaskID = req.params.taskId
            const node = await Node.findOne({NodeReference: NodeID});
            if(!node) {
               throw new Error('Node not found')
            }
            const task =  node.TaskContainer.find(task => task._id == TaskID)
            if(!task) {
                throw new Error('Task not found')
            }
            node.TaskContainer = node.TaskContainer.filter(task => task._id != TaskID)
            await node?.save()
            res.status(201).json({
                message: 'Success',
                data: node
            })
        }))



        return router
    }
}