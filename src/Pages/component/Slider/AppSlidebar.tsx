import { Home, CloudUpload, CloudDownload, LogOut, ListStart, AlignJustify, Rows4, ListEnd} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";


export default function AppSidebar() {
  return (
    <Sidebar >
      <SidebarHeader className="h-[3.3rem] flex justify-center py-2">
           <Label className="text-[#fff] font-sans" >GOLI</Label>
      </SidebarHeader>
      <Separator/>
      <SidebarContent>
        <div className=" flex gap-2 items-center pl-2 pt-2 pr-2 font-sans ">
            <Label  className="text-zinc-600 text-xs">APPLICATIONS</Label>
        </div>
        <div className="p-2 flex flex-col gap-1">
          <div draggable className="cursor-pointer flex gap-2 items-center p-2 hover:bg-accent hover:text-accent-foreground rounded-md">
            <Home className="dark:text-white h-4 w-4" /><Label  className="dark:text-white text-sm font-medium cursor-pointer" >Home</Label>
          </div>            

          <div className="cursor-pointer flex gap-2 items-center p-2  hover:bg-accent hover:text-accent-foreground rounded-md">
            <CloudUpload className="dark:text-white h-4 w-4" /><Label  className="dark:text-white text-sm font-medium cursor-pointer" >Upload</Label>
          </div>

          <div className="cursor-pointer flex gap-2 items-center p-2  hover:bg-accent hover:text-accent-foreground rounded-md">
            <CloudDownload className="dark:text-white h-4 w-4" /><Label  className="dark:text-white text-sm font-medium cursor-pointer" >Download</Label>
          </div>
        </div>
            <Separator />
          <div className=" flex gap-2 items-center p-2 ">
            <Label  className="text-zinc-600 text-xs">TOOLS</Label>
          </div>
          <div className="p-2 flex flex-col gap-2 h-[25rem] overflow-y-scroll">

            <Card id="startnode" onDragStart={(e) => e.dataTransfer.setData("text", "startnode")}
            draggable className="min-h-[4rem] flex gap-2 w-full cursor-grab font-sans ">
                <div className="h-full flex items-center justify-center p-2">
                  <ListStart className="dark:text-white h-4 w-4"/>
                </div>
                <div className="h-full w-[90%] flex flex-col gap-1 justify-center">
                  <h1 className="text-sm font-semibold">Start Node</h1>
                  <p className="line-clamp-2 text-xs text-muted-foreground">This is the starting of flow</p>
                </div>
            </Card>

            <Card id="middlenode" onDragStart={(e) => e.dataTransfer.setData("text", "middlenode")} draggable className="min-h-[4rem] flex gap-2 w-full cursor-grab font-sans ">
                <div className="h-full flex items-center justify-center p-2">
                  <AlignJustify className="dark:text-white h-4 w-4"/>
                </div>
                <div className="h-full w-[90%] flex flex-col gap-1 justify-center">
                  <h1 className="text-sm font-semibold">Intermediate Node</h1>
                  <p className="line-clamp-2 text-xs text-muted-foreground">This is the middle part of flow</p>
                </div>
            </Card>

            <Card id="endnode" onDragStart={(e) => e.dataTransfer.setData("text", "endnode")} draggable className="min-h-[4rem] flex gap-2 w-full cursor-grab font-sans ">
                <div className="h-full flex items-center justify-center p-2">
                  <ListEnd className="dark:text-white h-4 w-4"/>
                </div>
                <div className="h-full w-[90%] flex flex-col gap-1 justify-center">
                  <h1 className="text-sm font-semibold">End Node</h1>
                  <p className="line-clamp-2 text-xs text-muted-foreground">This is the end of flow</p>
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
