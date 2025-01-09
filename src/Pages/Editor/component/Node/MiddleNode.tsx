import { useEffect, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Progress } from "@/components/ui/progress"
import { useNodeGlobal } from '@/nodesProvider/node-state-management';
import { Card, CardHeader } from '@/components/ui/card';
import { Eye, Minus, MinusCircle, Plus } from 'lucide-react';
import { Node } from '@/types/node';
import { parseTimeDurationField } from '@/lib/parseTimeDurationField';
import { Button } from '@/components/ui/button';

interface Context {
  state?: any
  dispatch?: (value: { type: string , payload: any }) => any
}


function MiddleNode(props: any) {
  const {state}:Context = useNodeGlobal();
  const [nodeInformation, setNodeInformation] = useState<Node | null>(null);
  const [progress, setProgress] = useState(0);
    useEffect(() => {
      if(state?.nodes){
        const node = state?.nodes.find((node:any) => node?.        
        NodeReference === props.id)
        if(node){
          setNodeInformation(node)
        }
      }

    }, [state])

    useEffect(() => {
      if(nodeInformation?.TaskContainer?.length){
        let total = nodeInformation?.TaskContainer?.length
        let completed = 0
        nodeInformation?.TaskContainer?.map((task:any) => task?.Completed  && completed++)
        setProgress((completed/total)*100)
      }else{
        setProgress(0)
      }
    }, [nodeInformation])

  return (
    <Card 
    className={`relative  ${props.selected ? 'bg-[#1e1e1e]' : ''} p-4 w-[15rem] dark:border-muted-foreground/70 flex flex-col `}>
       {/* <div className='w-full p-2'>
        {
            !!nodeInformation?.TaskContainer?.length ?
            <Progress value={progress} className={`${props.selected? 'bg-[black]' :'bg-[#1e1e1e]'}`} />
            : <Progress value={0} className={`${props.selected? 'bg-[black]' :'bg-[#1e1e1e]'}`} />
          }
        </div> */}
        <CardHeader className="flex gap-2 p-0 ">

          <div>
            <div className='w-full flex justify-between'>
            <p className="text-md">{nodeInformation?.Name ? nodeInformation?.Name?.length > 20 ? `${nodeInformation?.Name?.slice(0, 20)}...` : nodeInformation?.Name : ''}</p>
            <Eye className='cursor-pointer' onClick={(e)=>{
              e.stopPropagation()
            }}/>
            </div>
            <div className="flex gap-1 items-center">
            <p className="text-sm">
                {nodeInformation?.DateStarted ? parseTimeDurationField(nodeInformation?.DateStarted) : ''}
            </p>
            <Minus />
            <p className="text-sm"> 
                {nodeInformation?.DateEnded ? parseTimeDurationField(nodeInformation?.DateEnded) : ''}
            </p>
            </div>
            <div>
              <p>{nodeInformation?.Description ? nodeInformation?.Description?.length > 20 ? `${nodeInformation?.Description?.slice(0, 20)}...` : nodeInformation?.Description : '' }</p>
            </div>
          </div>
        </CardHeader>
        <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={props.isConnectable}
        className='bg-[green]'
        style={{ width:15, height: 15 , border: '2px solid white', backgroundColor: 'black'}}
      />
            <Handle
        type="target"
        position={Position.Left}
        id="b"
        isConnectable={props.isConnectable}
        className='bg-[green]'
        style={{ width: 15, height: 15 , border: '2px solid white', backgroundColor: 'black'}}
      />

           
    </Card>
  );

}
export default MiddleNode;