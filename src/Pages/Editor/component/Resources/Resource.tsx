import React, { useState } from "react"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {CirclePlus} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NodeContext } from "@/types/context";
import usePost from "@/hooks/RequestServer/usePost"
import useDelete from "@/hooks/RequestServer/useDelete"
import {  Trash} from "lucide-react"


export default function Resource({state, dispatch}:NodeContext) {
    const [Name,setName] = useState<string>("")
    const [resourceSelected, setResourceSelected] = useState<string>("")

    const { mutateAsync: createResource} = usePost({
        url: `/resource/${state?.currentnode?.NodeReference}`,
        onSuccess: (data) => {
          dispatch && dispatch({type: "UPDATE_NODE", payload: data.data})
          setName("")
        }
      })

      const { mutateAsync: deleteResource} = useDelete({
        url: `/resource/${state?.currentnode?.NodeReference}/${resourceSelected}`,
        onSuccess: (data) => {
          dispatch && dispatch({type: "UPDATE_NODE", payload: data.data})
          setResourceSelected("")
        }
      })
    
    
    return (
        <div className=" w-full" >
            <form onSubmit={(e) => {e.preventDefault(); createResource({Name})}}>
            <Input value={Name} onChange={(e) => setName(e.target.value)} placeholder="www.resource.com" />
            <div className="w-full flex justify-end mt-2">
            <Button type="submit" variant={"outline"}> <CirclePlus/> Add Resource</Button>
            </div>
            </form>
            <div>
                {
                    state?.currentnode?.Resources?.map((resource: {
                        Name: string,
                        _id: string
                    }, index: number) => (
                        <Card key={index} className="my-2 rounded-md p-2 flex justify-between" >
                            <p>
                            {resource.Name}
                            </p> 
                            <Trash 
                            className="h-4 w-4 cursor-pointer "
                            color="#bd8383" 
                            onClick={async() => {
                                setResourceSelected(resource._id)
                                await deleteResource()
                                }}/>  
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}