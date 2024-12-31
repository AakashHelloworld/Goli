import {useCallback} from "react"
import axiosContainer from '@/lib/axiosContainer';
import { useNodeGlobal } from "@/nodesProvider/node-state-management";
import { getIncomers, getOutgoers, getConnectedEdges } from "@xyflow/react"
import { NodeContext } from "@/types/context";


export const useNodeDelete = ({ setSelectNode, setShow,setEdges,edges, nodes }: any) => {
  const { state, dispatch }: NodeContext = useNodeGlobal();

  const onNodeDelete = useCallback(
    async (deletedNodes: any[]) => {
      try {
        // Iterate over all deleted nodes and delete them from the backend
        await Promise.all(
          deletedNodes.map((node) =>
            axiosContainer.delete(`node/${node.id}`).then((response) => {
            })
          )
        );

        // Update the local state by filtering out deleted nodes
        if (state?.nodes) {
          const remainingNodes = state.nodes.filter(
            (node: any) =>
              !deletedNodes.some(
                (deletedNode) => deletedNode.id === node.NodeReference
              )
          );

          // Update the state with remaining nodes
          if (dispatch) {
            dispatch({ type: 'SET_ALL_NODES', payload: remainingNodes });
            dispatch({ type: 'SELECT_NODE', payload: null });
          }
          setSelectNode(null);
          setShow(false);
        }

        setEdges(deletedNodes.reduce((acc: any, node: any) => {
          const outgoers = getOutgoers(node, nodes, edges);
          const incomers = getIncomers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);


          const remainingEdges = acc.filter(
            (edge : any) => !connectedEdges.includes(edge),
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
              animated: true,
            })),
          );

          return [...remainingEdges, ...createdEdges];
        },  edges ));


      } catch (error) {
        console.error('Error deleting nodes:', error);
      }
    },
    [state, dispatch, setSelectNode, edges, nodes, setShow]
  );

  return onNodeDelete;
};
