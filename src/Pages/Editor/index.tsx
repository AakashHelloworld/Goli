import Flow from "./component/FLow"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import AppSidebar from './component/Slider';
import { useParams } from "react-router-dom";
import useGet from "@/hooks/RequestServer/useGet";
import {BotMessageSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNodeGlobal } from "@/nodesProvider/node-state-management";
import { NodeContext } from "@/types/context";
import Container from "./component/EditorContainer";
import { ReactFlowProvider } from "@xyflow/react";
export default function Editor() {
    const param = useParams();
    const {dispatch}:NodeContext = useNodeGlobal()

    const {data,isLoading, isError } = useGet(
        ["OneGoalPlan", param?.id], 
        {
            url: `goalplan/${param?.id}`,
            onSuccess: (data) => {
                if(data.data.allNodesData.length > 0){
                    if(dispatch){
                        
                        dispatch({type: 'SET_ALL_NODES', payload: data.data.allNodesData})
                    }
                }
            }
        },
    );

    if(isLoading){
        return( 
        <div className="h-screen flex justify-center items-center">
            loading....
        </div>
        )
    }
    if(isError){
        return(
        <div className="h-screen flex-col flex  gap-2 justify-center items-center">
            <Label>Check your connection and try again</Label>
            <Button onClick={()=>window.location.reload()}>Refresh</Button>
        </div>
        )     
    }
    
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="h-[100vh] flex flex-col  justify-center items-center w-full relative" >
                <div className="w-full h-[3.5rem] flex items-center gap-2 text-white py-2">
                    <SidebarTrigger />
                    <Label className="font-sans" >BUILD YOUR PLAN</Label>
                </div>
                <Card className="w-[100%] h-[100%] overflow-hidden rounded-none	 border-zinc-800 border-l-0">
                    { (data && data?.data?.goal?._id) && 
                    <ReactFlowProvider>
                    <Flow flowState={data?.data?.goal?.Content} >
                        <Container/>
                    </Flow>
                    </ReactFlowProvider>
                    }
                </Card>
                <div className='fixed bottom-5 right-5 w-[10rem] rounded h-[50px] border border-zinc-800 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground z-[9999] flex items-center justify-center gap-2 cursor-pointer'>
                        < BotMessageSquareIcon width={20} height={20}/> <p >Chat with AI</p>
                </div>
            </main>
        </SidebarProvider>
    )
}