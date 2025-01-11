import {useCallback} from "react"

export const useNodesChanges =({setNodes, applyNodeChanges,}: any)=>{
  const onNodesChange = useCallback(

    (changes : any) =>{
            setNodes((nds : any) => applyNodeChanges(changes, nds))},
    [],
  );

  return onNodesChange
}