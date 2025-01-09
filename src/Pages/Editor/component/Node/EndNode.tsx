import { Handle, Position } from '@xyflow/react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';


function EndNode({isConnectable } : any) {
  return (
    <Card className="relative dark:border-muted-foreground/70 w-[15rem] flex justify-center items-center h-[80px]">
      <CardHeader>
            <h1 className="font-semibold leading-none tracking-tight">End Node !!!</h1>
      </CardHeader>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ width:15, height: 15 , border: '2px solid white', backgroundColor: 'black'}}
        isConnectable={isConnectable}
  
      />

    </Card>
  );
}

export default EndNode;