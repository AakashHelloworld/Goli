import { Handle, Position } from '@xyflow/react';
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useState } from 'react';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Minus } from 'lucide-react';
function MiddleNode({isConnectable } : any) {
    const [connect, setConnect] = useState(false);
    const [active , setActive] = useState(false);
  return (
    <Card 
    className="relative max-w-[400px] dark:border-muted-foreground/70">
        <CardHeader className="flex flex-col items-center gap-2">
            <Progress value={60} className='bg-[#1e1e1e]' />
          <div>
            <div className='w-full flex justify-between'>
            <CardTitle className="text-md">Custom Node</CardTitle>
            <Badge onClick={() => setActive(!active)} className='cursor-pointer' variant="secondary">{active ? 'Active' : 'Inactive'}</Badge>
            </div>
            <div className="flex gap-1 items-center">
            <CardDescription className="text-sm">
                OCT, 8th 2022
            </CardDescription>
            <Minus />
            <CardDescription className="text-sm">
                OCT, 8th 2022
            </CardDescription>
            </div>
            <CardDescription>
              <p>Custome Node description.</p>
            </CardDescription>
          </div>
        </CardHeader>
        <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
        onConnect={() => setConnect(true)}
        className='bg-[green]'
        style={{ width:15, height: 15 , border: '2px solid white', backgroundColor: 'black'}}
      />
            <Handle
        type="target"
        position={Position.Top}
        id="b"
        isConnectable={isConnectable}
        onConnect={() => setConnect(true)}
        className='bg-[green]'
        style={{ width: 15, height: 15 , border: '2px solid white', backgroundColor: 'black'}}
      />
           
    </Card>
  );

}
export default MiddleNode;