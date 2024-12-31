import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
function StartNode({isConnectable } : any) {

    const [connect, setConnect] = useState(false);

  return (
    <Card className="relative dark:border-muted-foreground/70 w-[10rem] flex justify-center items-center h-[100px]">
      <CardHeader>
      <h3 className="font-semibold leading-none tracking-tight">Start</h3>
      </CardHeader>
    <Handle
  type="source"
  position={Position.Bottom}
  id="a"
  // isConnectable={isConnectable}
  onConnect={() => setConnect(true)}
  style={{ width:15, height: 15 , border: '2px solid white', backgroundColor: 'black'}}/>

</Card>
  );
}

export default StartNode;





