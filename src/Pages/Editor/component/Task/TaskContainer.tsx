import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Trash} from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {CirclePlus} from "lucide-react";
import usePost from "@/hooks/RequestServer/usePost"
import { NodeContext } from "@/types/context"
import usePatch from "@/hooks/RequestServer/usePatch"
import useDelete from "@/hooks/RequestServer/useDelete"


export default function TaskContainer({state, dispatch }: NodeContext) {
  const [Name,setName] = useState<string>("")
  const [taskSelected, setTaskSelected] = useState<string>("")
  const [edit, setEdit] = useState(false);

  // Create Task
  const { mutateAsync: createTask} = usePost({
    url: `/task/${state?.currentnode?.NodeReference}`,
    onSuccess: (data) => {
      dispatch && dispatch({type: "UPDATE_NODE", payload: data.data})
      setName("")
    }
  })

  // Update Task
  const { mutateAsync: updateTask} = usePatch({
    url: `/task/${state?.currentnode?.NodeReference}/${taskSelected}`,
    onSuccess: (data) => {
      dispatch && dispatch({type: "UPDATE_NODE", payload: data.data})
       setEdit(false)
       setName("")
       setTaskSelected("")
    }
  })

  // Delete Task
  const { mutateAsync: deleteTask} = useDelete({
    url: `/task/${state?.currentnode?.NodeReference}/${taskSelected}`,
    onSuccess: (data) => {
      dispatch && dispatch({type: "UPDATE_NODE", payload: data.data})
    }
  })


 return (      
      <div>
        
        <form 
        onSubmit={async(e : React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault()
          if(edit){
            await updateTask({Name})
          }else{
            await createTask({Name})
          }
        
        }
          }
        className="flex flex-col gap-2">

        <Input placeholder="www.resource.com" value={Name} onChange={(e) => { setName(e.target.value)}} />

        <div className="w-full flex justify-end mt-2">
          <Button type="submit" variant={"outline"} > <CirclePlus/> {edit ? "Update Task" : "Add Task"}</Button>
        </div>
        
        </form>
        
      {
        !!state?.currentnode?.TaskContainer?.length && 
        <Card className=" mt-2">
        <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="flex gap-2 items-center"><Checkbox  />Check All tasks</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                { state?.currentnode?.TaskContainer.map((task : {
                  Name : string
                  Completed: boolean
                  _id: string
                }, index : number) => (
                  <TableRow key={index}>
                    <TableCell className="flex gap-2 items-center">
                        <Checkbox
                        
                        defaultChecked={task?.Completed}
                          checked={task?.Completed}
                          onCheckedChange={async (checked) => {
                            setTaskSelected(task?._id)
                            await updateTask({Completed: checked})
                          }}

                        />
                        <p>{task?.Name}</p>
                    </TableCell>
                    <TableCell className="text-right cursor-pointer">
                      <div className="flex gap-2 items-center justify-end">
                        
                        <Pencil className="h-4 w-4 cursor-pointer " 
                        onClick={() => {
                          setTaskSelected(task?._id)  
                          setName(task?.Name)
                          setEdit(true)
                        }}  />

                        <Trash className="h-4 w-4 cursor-pointer "
                        onClick={async() =>{
                          setTaskSelected(task?._id)
                          await deleteTask()}} color="#bd8383" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Card>
      }    
      </div>
    )
}