import { Handle, Position } from '@xyflow/react';

function EndNode({isConnectable } : any) {
  return (
    <div className="w-[150px] flex items-center justify-center rounded-sm bg-[#1e1e1e] p-2 border border-[#3c3c3c]">
            <h1 className="text-[12px]">End Node !!!</h1>
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        style={{ background: 'black', width: 7, height: 7 , border: '2px solid white'}}
        isConnectable={isConnectable}
      />

    </div>
  );
}

export default EndNode;