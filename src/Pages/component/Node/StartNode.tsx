import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
function StartNode({isConnectable } : any) {

    const [connect, setConnect] = useState(false);

  return (
    <Card className="relative dark:border-muted-foreground/70 rounded-full">
    <CardHeader className="">
    <CardTitle className="text-md">Start</CardTitle>
    </CardHeader>
    <Handle
  type="source"
  position={Position.Bottom}
  id="a"
  // isConnectable={isConnectable}
  onConnect={() => setConnect(true)}
  className='bg-[green]'
  style={{ width: 7, height: 7 , border: '2px solid white'}}
/>

</Card>
  );
}

export default StartNode;





