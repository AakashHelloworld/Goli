import { Home, CloudUpload, CloudDownload, LogOut, ListStart, AlignJustify, ListEnd} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function AppSidebar() {
  return (
    <Sidebar >
      <SidebarHeader className="h-[3.3rem] flex justify-center">
           <h6 className="font-sans font-semibold text-[#fff]" >PlaneTree</h6>
           <p className="text-[#fff]/50 text-sm">make your plan</p>
      </SidebarHeader>
      <Separator/>
      <SidebarContent>
          <div className="p-2 flex flex-col gap-2">       
              <Card id="startnode" onDragStart={(e) => e.dataTransfer.setData("text", "startnode")}
            draggable className="flex gap-1 p-1 w-full cursor-grab font-sans ">
                <div className="h-full flex items-center justify-center p-2">
                  <ListStart className="dark:text-white h-4 w-4"/>
                </div>
                <div className="h-full w-[90%] flex flex-col justify-center">
                  <h1 className="text-sm font-semibold">Start Node</h1>
                </div>
            </Card>
            <Card id="middlenode" onDragStart={(e) => e.dataTransfer.setData("text", "middlenode")} draggable className=" flex gap-1 p-2 w-full cursor-grab font-sans ">
                <div className="h-full flex items-center justify-center p-1">
                  <AlignJustify className="dark:text-white h-4 w-4"/>
                </div>
                <div className="h-full w-[90%] flex flex-col gap-1 justify-center">
                  <h1 className="text-sm font-semibold">Intermediate Node</h1>
                </div>
            </Card>
            <Card id="endnode" onDragStart={(e) => e.dataTransfer.setData("text", "endnode")} draggable className="p-2 flex gap-1 w-full cursor-grab font-sans ">
                <div className="h-full flex items-center justify-center p-1">
                  <ListEnd className="dark:text-white h-4 w-4"/>
                </div>
                <div className="h-full w-[90%] flex flex-col gap-1 justify-center">
                  <h1 className="text-sm font-semibold">End Node</h1>
                </div>
            </Card>              
          </div>
      </SidebarContent>

      <SidebarFooter >
        <div className="cursor-pointer flex gap-2 items-center p-2 hover:bg-accent hover:text-accent-foreground rounded-md">
        <LogOut className="dark:text-white h-4 w-4"/> <Label className="dark:text-white text-sm font-medium cursor-pointer" > Logout </Label>
        </div>

      </SidebarFooter>
    </Sidebar>
  );
}
