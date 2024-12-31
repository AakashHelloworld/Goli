import {useCallback} from "react"
import { useNodeGlobal } from "@/nodesProvider/node-state-management";
import { NodeContext } from "@/types/context";


export const useNodeOnClick =({setSelectNode, setShow, selectNode, show, dispatch }: any)=>{
    const {state}:NodeContext = useNodeGlobal();
    const onNodeClick = useCallback(async(event: any, node : any) => {
        event.preventDefault()
        if(node.type === 'startnode' || node.type === 'endnode') {
          setSelectNode(null)
          setShow(false)
          return
        }
        if(node.id === selectNode && show === true){
          setShow(false)
          setSelectNode(null)
          return 
        }
        const selectedNode = state?.nodes?.find(
          (oneNode: any) => oneNode?.NodeReference === node.id
        );
        if (!selectedNode) return;
        dispatch?.({ type: "SELECT_NODE", payload: selectedNode });
        setSelectNode(node.id);
        setShow(true);
 
    },[show, selectNode, state?.nodes, state?.currentnode])

  return onNodeClick
}