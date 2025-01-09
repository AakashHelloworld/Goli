import { useCallback, useEffect, useState } from 'react';

// React Flow 
import {ReactFlow,  Controls, applyNodeChanges, ReactFlowInstance,  applyEdgeChanges, Background, addEdge,  Panel, useReactFlow} from '@xyflow/react';
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

// Types
import { FlowState } from '@/types/flow';
import { NodeContext } from '@/types/context';


// Custom Hooks
import { useConnect } from '@/hooks/NodeHooks/useConnect';
import { useEdgesChange } from '@/hooks/NodeHooks/useEdgesChange';
import { useNodesChanges } from '@/hooks/NodeHooks/useNodesChange';
import { useNodeDragOver } from '@/hooks/NodeHooks/useNodeDragOver';
import { useNodeOnDrop } from '@/hooks/NodeHooks/useNodeOnDrop';
import { useNodeDelete } from '@/hooks/NodeHooks/useNodeDelete';
import { useNodeOnClick } from '@/hooks/NodeHooks/useNodeOnClick';
import { useConnectionEnd } from '@/hooks/NodeHooks/useConnectionEnd';
import { useParams } from 'react-router-dom';
import usePatch from '@/hooks/RequestServer/usePatch';




// Icons
import { Loader2 } from 'lucide-react';
import { RefreshCcw} from "lucide-react"
import { v4 } from 'uuid';


// Node
const nodeType : { [key: string]: (props: any) => JSX.Element} = { startnode: StartNode, endnode: EndNode, middlenode: MiddleNode };


interface FlowProps {
  flowState: FlowState;
  children?: React.ReactNode
}
  
function Flow({flowState, children}: FlowProps) {
  //  Globla Context
  const { screenToFlowPosition } = useReactFlow();
  const { state,dispatch} : NodeContext = useNodeGlobal()
  const param = useParams();
  const [nodes, setNodes] = useState(flowState.nodes);
  const [edges, setEdges] = useState(flowState.edges);
  const [selectNode , setSelectNode] = useState(null)
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>()
  const [show, setShow] = useState(false)


  useEffect(() => {
    let allNode= state?.nodes;
    let allEdge = edges;  
    if(allEdge?.length){
      let newEdges =  allEdge?.map((edge: any)=>{

          let checkSourceNodeIsStartNode : any = nodes?.find((node: any) => node?.id === edge?.source && node?.type === 'startnode') ? [nodes?.find((node: any) => node?.id === edge?.source && node?.type === 'startnode')] : []
          
          let checkSourceNodeIsInNodes : any = allNode?.find((node: any) => node?.NodeReference === edge?.source ) ? [allNode?.find((node: any) => node?.NodeReference === edge?.source )] : []
          
          let checkTargetNodeIsEndNode : any = nodes?.find((node: any) => node?.id === edge?.target && node?.type === 'endnode') ? [nodes?.find((node: any) => node?.id === edge?.target && node?.type === 'endnode')] : []
          
          let checkTargetNodeIsInNodes : any = allNode?.find((node: any) => node?.NodeReference === edge?.target) ? [allNode?.find((node: any) => node?.NodeReference === edge?.target)] : []

          if(checkSourceNodeIsStartNode?.length && checkTargetNodeIsEndNode?.length){
            return {...edge, animated: false}


          }else if(checkSourceNodeIsStartNode?.length && checkTargetNodeIsInNodes?.length){

            return {...edge, animated: false}

        }else if(checkSourceNodeIsInNodes?.length && checkTargetNodeIsEndNode?.length){
                    
          let total = checkSourceNodeIsInNodes[0]?.TaskContainer?.length || 1
          let completed = 0
          checkSourceNodeIsInNodes[0]?.TaskContainer?.map((task:any) => task?.Completed  && completed++)
          let progress = (completed/total)*100
          if(progress === 100){
            return {...edge, animated: false}
          }else{
            return {...edge, animated: true}
          }
        }else if(checkSourceNodeIsInNodes?.length && checkTargetNodeIsInNodes?.length){
          
          let total = checkSourceNodeIsInNodes[0]?.TaskContainer?.length || 1
          let completed = 0
          checkSourceNodeIsInNodes[0]?.TaskContainer?.map((task:any) => task?.Completed  && completed++)
          let progress = (completed/total)*100

          if(progress === 100){
            return {...edge, animated: false}
          }else{
            return {...edge, animated: true}
          }
        }else{
          return edge
        }

        })
        if(newEdges.length){
          setEdges(newEdges)
        }
      }
  }, [state])


  //  change controller
  const onDragOver = useNodeDragOver();

  const onDrop = useNodeOnDrop({reactFlowInstance,setNodes,dispatch,setShow   })

  const onNodeClick = useNodeOnClick({setSelectNode, setShow, selectNode, show, dispatch })

  const onNodesChange = useNodesChanges({setNodes, applyNodeChanges})

  const onEdgesChange = useEdgesChange({setEdges, applyEdgeChanges})

  const onConnect = useConnect({setEdges, addEdge, nodes})

  const onNodeDelete = useNodeDelete({setNodes, setSelectNode, setShow, setEdges,edges, nodes })

  const onConnectEnd = useConnectionEnd({setSelectNode, setShow,setEdges,edges, nodes, screenToFlowPosition , setNodes})

  // const onConnectionEnf
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
        onConnectEnd={onConnectEnd}
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
            <RefreshCcw className={`${isLoading ? 'animate-spin' : ''} `} width={20} height={20}/> <p>Save</p>
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