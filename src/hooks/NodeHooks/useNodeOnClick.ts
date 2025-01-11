import {useCallback} from "react"
import { useNodeGlobal } from "@/nodesProvider/node-state-management";
import { NodeContext } from "@/types/context";
import { getOutgoers } from "@xyflow/react";

export const useNodeOnClick =({setSelectNode, setShow, selectNode, show, dispatch, nodes, edges, setNodes}: any)=>{
    const {state}:NodeContext = useNodeGlobal();
    
    const onNodeClick = useCallback(async(event: any, node : any) => {

        event.preventDefault()

        const getAllDescendants = (node: any, nodes: any, edges: any, descendants: any[] = []) => {
          const directChildren = getOutgoers(node, nodes, edges);
          directChildren.forEach((child: any) => {
            if (!descendants.includes(child)) {
              descendants.push(child);  // Add child to descendants
              getAllDescendants(child, nodes, edges, descendants);  // Recursively find its children
            }
          });
          return descendants;
        };
        
        if (event.target.id == 'eyeclose' || event.target.id == 'eyeopen') {
          // console.log(node.data.hidden, 'receive');  // Reflects correct toggled state after one change
          console.log(node, 'receive')
          console.log("........................")
          
          const isHidden = !node.data.hidden;  // Toggle based on intended action
          
          // Find all descendants recursively
          const allDescendants = getAllDescendants(node, nodes, edges);
          
          // Filter nodes to exclude descendants and update hidden state for all descendants
          const filterNonDescendants = nodes.filter((data : any) => !allDescendants.includes(data));
          const updatedDescendants = allDescendants.map(child => ({ ...child, hidden: isHidden }));
          
          setNodes([...filterNonDescendants, ...updatedDescendants]);
          return;
        }
        


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
 
    },[show, selectNode, state?.nodes, state?.currentnode, nodes])

  return onNodeClick
}