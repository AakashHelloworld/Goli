import {Router} from "express"
import { handleAsyncRequest } from '../../lib/handle-async-request';
import { authenticateToken } from '../../lib/middleware';
import Node from "../../models/node";



export class APINODE {
    static instance(){
        const router = Router();

        //  Authentication needed from here
        router.use(authenticateToken)

        // Create new Node

        router.post('/:id', handleAsyncRequest(async(req, res)=>{
            const node = await Node.create({NodeReference: req.params.id})
            res.status(201).json({
                message: 'Success',
                data: node
            })
        }))

        // Get new Node

        router.get("/:id", handleAsyncRequest(async(req, res)=>{
            const node = await Node.findOne({NodeReference: req.params.id})
            res.status(200).json({
                message: 'Success',
                data: node
            })
        }))


        // Delete Node

        router.delete("/:id", handleAsyncRequest(async(req, res)=>{
            const node = await Node.deleteOne({NodeReference: req.params.id})
            res.status(200).json({
                message: 'Success',
            })
        }))

        // Update Node Name and Description

        router.patch("/:id", handleAsyncRequest(async(req, res)=>{
            const node = await Node.findOneAndUpdate({NodeReference: req.params.id}, {...req.body}, { new: true })
            res.status(200).json({
                message: 'Success',
                data: node
            })
        }))

        return router
    }
}