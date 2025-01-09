import {useCallback} from "react"
import { useNodeGlobal } from "@/nodesProvider/node-state-management";
import { NodeContext } from '@/types/context';


export const useConnect =({setEdges, addEdge, nodes}: any)=>{


  const { state }: NodeContext = useNodeGlobal();
  const onConnect = useCallback(

    (params : any) => {
      
      console.log(params, 'params')     

      console.log(nodes, 'nodes')

     
      let checkSourceAsStartNode = nodes?.find((node:any) => node?.id === params?.source && node?.type === 'startnode') ? [nodes?.find((node:any) => node?.id === params?.source && node?.type === 'startnode')] : []

      let checkSourceAsInNodes = state?.nodes.find((node:any) => node?.NodeReference === params?.source ) ? [state?.nodes?.find((node:any) => node?.NodeReference === params?.source )] : []

      let checkTargetAsEndNode = nodes?.find((node:any) => node?.id === params?.target && node?.type === 'endnode') ? [nodes.find((node:any) => node?.id === params?.target && node?.type === 'endnode')] : []

      let checkTargetAsInNodes = state?.nodes?.find((node:any) => node?.NodeReference === params?.target) ? [state?.nodes?.find((node:any) => node?.NodeReference === params?.target)] : []


      if(checkSourceAsStartNode?.length && checkTargetAsEndNode?.length){

       return  setEdges((eds : any) => addEdge({...params, animated: false, style: { strokeWidth: 4}}, eds))
 
      }else if(checkSourceAsStartNode.length && checkTargetAsInNodes.length){

        return  setEdges((eds : any) => addEdge({...params, animated: false, style: { strokeWidth: 4}}, eds))

      }else if(checkSourceAsInNodes.length && checkTargetAsEndNode.length){

        let total = checkSourceAsInNodes[0]?.TaskContainer?.length || 1
        let completed = 0
        checkSourceAsInNodes[0]?.TaskContainer?.map((task:any) => task?.Completed  && completed++)
        let progress = (completed/total)*100
        if(progress === 100){
          return setEdges((eds : any) => addEdge({...params, animated: false, style: { strokeWidth: 4}}, eds))
        }else{
          return setEdges((eds : any) => addEdge({...params, animated: true, style: { strokeWidth: 4}}, eds))
        }

      }else if(checkSourceAsInNodes.length && checkTargetAsInNodes.length){
        let total = checkSourceAsInNodes[0]?.TaskContainer?.length || 1
        let completed = 0
        checkSourceAsInNodes[0]?.TaskContainer?.map((task:any) => task?.Completed  && completed++)
        let progress = (completed/total)*100
        if(progress === 100){
          return setEdges((eds : any) => addEdge({...params, animated: false, style: { strokeWidth: 4}}, eds))
        }else{
          return setEdges((eds : any) => addEdge({...params, animated: true, style: { strokeWidth: 4}}, eds))
        }

      }else{
        return setEdges((eds : any) => addEdge({...params, animated: true, style: { strokeWidth: 4}}, eds))
        
      }
    },

    [ state, nodes],
  );

  return onConnect
}