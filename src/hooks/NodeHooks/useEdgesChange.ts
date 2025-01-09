import {useCallback} from "react"


export const useEdgesChange =({setEdges, applyEdgeChanges}: any)=>{
  const onEdgesChange = useCallback(
    (changes : any) => {
      
      setEdges( (eds : any) => applyEdgeChanges(changes, eds))},
    [setEdges, applyEdgeChanges],
  );

  return onEdgesChange
}