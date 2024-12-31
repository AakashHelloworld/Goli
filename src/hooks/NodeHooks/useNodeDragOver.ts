import {useCallback} from "react"

export const useNodeDragOver =()=>{
    
    const onDragOver = useCallback((event: any) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
      }, [])

  return onDragOver
}