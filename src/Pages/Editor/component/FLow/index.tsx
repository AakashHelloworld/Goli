import { useState, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  applyNodeChanges,
  ReactFlowInstance,
  applyEdgeChanges,
  Background,
  addEdge,
} from '@xyflow/react';
import  {v4} from 'uuid';
import '@xyflow/react/dist/style.css';
import StartNode from '../Node/StartNode';
import EndNode from '../Node/EndNode';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Container from '../EditorContainer';
import MiddleNode from '../Node/MiddleNode';
const initialNodes : any = [
];

const initialEdges : any = [];

const nodeType : any = { startnode: StartNode, endnode: EndNode, middlenode: MiddleNode };

function Flow() {
  
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectNode , setSelectNode] = useState(null)
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>()
  const [show, setShow] = useState(false)

  const onDragOver = useCallback((event: any) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault()
      const type = event.dataTransfer.getData('text')
      if(!reactFlowInstance) return
      const position = reactFlowInstance.screenToFlowPosition({ x: event.clientX, y: event.clientY })
      const newNode = {
        id: v4(),
        type,
        data: { label: event.dataTransfer.getData('text') },
        position,
      }
      if(type === 'middlenode') {
        setShow(true)
      }
      setNodes((nds : any) => nds.concat(newNode))

    },
    [reactFlowInstance]
  )


  const onNodeClick = useCallback((event: any, node : any) => {
      event.preventDefault()
      console.log(node)
      if(node.type === 'startnode' || node.type === 'endnode') {
        setSelectNode(null)
        setShow(false)
        return
      }
      if(node.id === selectNode && show === true){
        setShow(false)
        return 
      }
      setSelectNode(node.id)
      setShow(true)
  },[show, selectNode])


  const onNodesChange = useCallback(
    (changes : any) => setNodes((nds : any) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes : any) => setEdges((eds : any) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params : any) => setEdges((eds : any) => addEdge({...params, animated: true}, eds)),
    [],
  );

  return (
      <ResizablePanelGroup direction='horizontal' className='w-[100%] h-[100%]'>
      <ResizablePanel defaultSize={show ? 60 : 100}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onDrop={onDrop}
        onInit={setReactFlowInstance}
        defaultViewport={{ x: 0, y: 0, zoom: 1}}
        onPaneClick={() => setShow(false)}
        onNodeClick={onNodeClick}
        onDragOver={onDragOver}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}    
        nodeTypes={nodeType}
        colorMode='dark'
        panOnScroll
        fitView
      > 
        <Background 
          gap={20}
          size={1}
        />
        <Controls position='top-right'  />
      </ReactFlow>
      </ResizablePanel>
      { show && 
      <>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} >
        <Container />
      </ResizablePanel>
      </>
      }

      </ResizablePanelGroup>
  );
}

export default Flow;