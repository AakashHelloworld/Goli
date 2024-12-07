import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
function StartNode({isConnectable } : any) {

    const [connect, setConnect] = useState(false);

  return (
    <Card className="relative dark:border-muted-foreground/70 w-[100px]  flex justify-center items-center h-[100px]  rounded-full">
      <h3 className="font-semibold leading-none tracking-tight">Start</h3>
    <Handle
  type="source"
  position={Position.Bottom}
  id="a"
  // isConnectable={isConnectable}
  onConnect={() => setConnect(true)}
  className='bg-[green]'
  style={{ width:15, height: 15 , border: '2px solid white', backgroundColor: 'black'}}/>

</Card>
  );
}

export default StartNode;





