import {useCallback} from "react"
import  {v4} from 'uuid';
import axiosContainer from '@/lib/axiosContainer';

export const useNodeOnDrop =({reactFlowInstance,setNodes,dispatch,setShow }: any)=>{
    
    const onDrop = useCallback(
        async(event: any) => {
          event.preventDefault()
          const type = event.dataTransfer.getData('text')
          if(!reactFlowInstance) return
          const position = reactFlowInstance.screenToFlowPosition({ x: event.clientX, y: event.clientY })
          const Id= v4()
          const newNode = {
            id: Id,
            type,
            position,
          }
          setNodes((nds : any) => nds.concat(newNode))
          if(type === 'middlenode') {          await axiosContainer.post(`node/${Id}`).then((data)=>{
            if(dispatch){
              dispatch({type: 'SELECT_NODE', payload: data.data.data})
              dispatch({type: 'ADD_NODE', payload: data.data.data})  
            }
          })
       
            setShow(true)
          }
    
        },
        [reactFlowInstance]
      )

  return onDrop
}