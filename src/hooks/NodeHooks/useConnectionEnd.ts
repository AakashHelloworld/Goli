import {useCallback} from "react"
import axiosContainer from '@/lib/axiosContainer';
import { useNodeGlobal } from "@/nodesProvider/node-state-management";
import { NodeContext } from "@/types/context";
import  {v4} from 'uuid';


export const useConnectionEnd = ({ setSelectNode, setShow,setEdges,edges, nodes, screenToFlowPosition , setNodes}: any) => {
  const { state, dispatch }: NodeContext = useNodeGlobal();

  const onConnectEnd = useCallback(
    (event : any, connectionState : any) => {
      if (!connectionState.isValid) {
        const id = v4();
        const { clientX, clientY } =
          'changedTouches' in event ? event.changedTouches[0] : event;
        const newNode = {
          id,
          type: 'middlenode',
          position: screenToFlowPosition({
            x: clientX,
            y: clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };
 
        setNodes((nds : any) => nds.concat(newNode));
        setEdges((eds : any) =>
          eds.concat({ id, source: connectionState.fromNode.id, target: id, animated: true, style: { strokeWidth: 4} }),
        );
        axiosContainer.post(`node/${id}`).then((data)=>{
          if(dispatch){
            dispatch({type: 'SELECT_NODE', payload: data.data.data})
            dispatch({type: 'ADD_NODE', payload: data.data.data})  
          }
        })
        setShow(true)


      }
    },
    [screenToFlowPosition],
  );

  return onConnectEnd;
};
