import Flow from "./component/FLow"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import AppSidebar from './component/Slider';

export default function Editor() {

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="h-[100vh] flex flex-col  justify-center items-center w-full relative" >
                <div className="w-full h-[3.5rem] flex items-center gap-2 text-white py-2">
                <SidebarTrigger />
                 <Label className="font-sans" >BUILD YOUR PLAN</Label>
                </div>
                <Card className="w-[100%] h-[100%] overflow-hidden rounded-none	 border-zinc-800 border-l-0">
                    <Flow />
                </Card>
            </main>
        </SidebarProvider>
    )
}