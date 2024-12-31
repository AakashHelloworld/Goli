import { useState } from 'react';

// React Flow 
import {ReactFlow,  Controls, applyNodeChanges, ReactFlowInstance,  applyEdgeChanges, Background, addEdge,  Panel} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Node 
import StartNode from '../Node/StartNode';
import EndNode from '../Node/EndNode';
import MiddleNode from '../Node/MiddleNode';

// Resizable 
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

// Node Provider
import { useNodeGlobal } from '@/nodesProvider/node-state-management';

// Components
import { Button } from '@/components/ui/button';
import Container from '../EditorContainer';

// Types
import { FlowState } from '@/types/flow';

// Custom Hooks
import { useConnect } from '@/hooks/NodeHooks/useConnect';
import { useEdgesChange } from '@/hooks/NodeHooks/useEdgesChange';
import { useNodesChanges } from '@/hooks/NodeHooks/useNodesChange';
import { useNodeDragOver } from '@/hooks/NodeHooks/useNodeDragOver';
import { useNodeOnDrop } from '@/hooks/NodeHooks/useNodeOnDrop';
import { useNodeDelete } from '@/hooks/NodeHooks/useNodeDelete';
import { useNodeOnClick } from '@/hooks/NodeHooks/useNodeOnClick';
import { useParams } from 'react-router-dom';
import usePatch from '@/hooks/RequestServer/usePatch';
import { NodeContext } from '@/types/context';
// Icons
import { Loader2 } from 'lucide-react';
import { RefreshCcw} from "lucide-react"


// Node
const nodeType : { [key: string]: (props: any) => JSX.Element} = { startnode: StartNode, endnode: EndNode, middlenode: MiddleNode };


interface FlowProps {
  flowState: FlowState;
  children?: React.ReactNode
}
  
function Flow({flowState, children}: FlowProps) {
  //  Globla Context
  const { dispatch} : NodeContext = useNodeGlobal()
  const param = useParams();
  const [nodes, setNodes] = useState(flowState.nodes);
  const [edges, setEdges] = useState(flowState.edges);
  const [selectNode , setSelectNode] = useState(null)
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>()
  const [show, setShow] = useState(false)
  

  //  change controller
  const onDragOver = useNodeDragOver();

  const onDrop = useNodeOnDrop({reactFlowInstance,setNodes,dispatch,setShow   })

  const onNodeClick = useNodeOnClick({setSelectNode, setShow, selectNode, show, dispatch })

  const onNodesChange = useNodesChanges({setNodes, applyNodeChanges})

  const onEdgesChange = useEdgesChange({setEdges, applyEdgeChanges})

  const onConnect = useConnect({setEdges, addEdge})

  const onNodeDelete = useNodeDelete({setNodes, setSelectNode, setShow, setEdges,edges, nodes })


  // update 
  const {mutateAsync: updateContent, isLoading} = usePatch({
    url: `/goalplan/${param?.id}`,
     onSuccess: () => {
       
     }
  }) 



  return (
      <ResizablePanelGroup direction='horizontal' className='w-[100%] h-[100%]'>
      <ResizablePanel defaultSize={show ? 70 : 100}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        minZoom={0.3}
        onDrop={onDrop}
        onInit={setReactFlowInstance}
        defaultViewport={{ x: 0, y: 0, zoom: 0.5}}
        onPaneClick={() => setShow(false)}
        onNodeClick={onNodeClick}
        onDragOver={onDragOver}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}    
        onNodesDelete={onNodeDelete}
        nodeTypes={nodeType}
        colorMode='dark'
        panOnScroll
        fitView={false}
      > 
            <Panel position="bottom-left">
            <Button
          disabled={isLoading}
          variant={'outline'}
          className='w-[7rem]'
          onClick={()=>updateContent({
            Content: {
              nodes: nodes,
              edges: edges
            }
          })}
          >
            {isLoading ? <Loader2 /> : 
            <>
            <RefreshCcw width={20} height={20}/> <p>Save</p>
            </>
            }
          </Button>
            </Panel>
         <Background 
          gap={20}
          size={1}
        />
        <Controls position='top-right'  />
      </ReactFlow>
      </ResizablePanel>
      <ResizableHandle />
      { show && 
      <>
      <ResizablePanel defaultSize={30} >
        {
          children
        }
      </ResizablePanel>
      </>
      } 


      </ResizablePanelGroup>
  );
}

export default Flow;