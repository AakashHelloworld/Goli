import Flow from "./component/FLow"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import AppSidebar from './component/Slider';
import { useParams } from "react-router-dom";
import useGet from "@/hooks/useGet";
import { Ban, Loader2 } from "lucide-react";
import { useState } from "react";
import {ResponseOnePlan, FlowState } from "@/types/flow"
export default function Editor() {
    const [flowState, setFlowState] = useState<FlowState>({
        nodes:[],
        edges:[]
    });
    const param = useParams();

    const { data: plan, isLoading, isError } = useGet(
        ["OneGoalPlan", param?.id], 
        {
            url: `goalplan/${param?.id}`,
            onSuccess: (data: ResponseOnePlan) => {
                console.log("Fetched plans successfully:", data);
                setFlowState(data.data.Content)
            },
            onError: (error) => {
                console.error("Error fetching plans:", error);
            },
        }
    );
    if(isLoading){
        return( 
        <div className="h-screen flex justify-center items-center">
            <Loader2/>
        </div>
        )
    }
    if(isError){
        return(
        <div className="h-screen flex justify-center items-center">
            <Ban />
        </div>
        )     
    }
    console.log(plan)
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="h-[100vh] flex flex-col  justify-center items-center w-full relative" >
                <div className="w-full h-[3.5rem] flex items-center gap-2 text-white py-2">
                <SidebarTrigger />
                 <Label className="font-sans" >BUILD YOUR PLAN</Label>
                </div>
                <Card className="w-[100%] h-[100%] overflow-hidden rounded-none	 border-zinc-800 border-l-0">
                    <Flow flowState={flowState} />
                </Card>
            </main>
        </SidebarProvider>
    )
}