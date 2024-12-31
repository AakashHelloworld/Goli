import {useCallback} from "react"

export const useConnect =({setEdges, addEdge}: any)=>{
  const onConnect = useCallback(
    (params : any) => setEdges((eds : any) => addEdge({...params, animated: true}, eds)),
    [],
  );

  return onConnect
}