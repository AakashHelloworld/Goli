import { Plus, List, Grid2X2, EllipsisVertical } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import CardList from "./CardList"
 
  

export default function DashboardContainer(){

return(
    <section className="w-full p-8">
        <div className="p-2 border-[#171717] border-2 rounded p-[1rem] flex gap-4 ">
            <div className="flex flex-col gap-4">
            <div className="bg-[#171717] h-[7em] w-[10rem] rounded flex items-center justify-center cursor-pointer">
                <Plus />
            </div>
            <Label className="ml-4">Blank</Label>
            </div>
            <div className="flex flex-col gap-4">
            <div className="bg-[#171717] h-[7em] w-[10rem] rounded flex items-center justify-center cursor-pointer">
            </div>
            <Label className="ml-4">Flow chart</Label>
            </div>
        </div>

        {/*  */}

        <div className="w-full flex justify-between items-center p-2 mt-2">
            <div>
                <Label className="text-xl">Boards in this team</Label>
            </div>
            <div>
                <Button className=""><Plus width={10} height={10}/> Create new</Button>
            </div>
        </div>

        {/*  */}

        <div className="w-full flex items-center justify-between p-2 mt-1">
            <div className="flex gap-4 items-center">
                <Label>Filter by</Label>
                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Owned by anyone" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="anyone">Owned by Anyone</SelectItem>
                    <SelectItem value="me">Owned by me</SelectItem>
                    <SelectItem value="other">Owned by other</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>

                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sorted" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="opened">Last Opened</SelectItem>
                    <SelectItem value="modified">Last Modified</SelectItem>
                    <SelectItem value="alphabetically">Alphabetically</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
            </div>
            {/*  */}
            <div className="flex items-center gap-2">
                <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-[#171717] cursor-pointer ">
                <List width={18} height={18} />
                </div>
                <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-[#171717] cursor-pointer ">
                <Grid2X2 width={18} height={18} />
                </div>
            </div>
            
        </div>

            {/*  */}

         <CardList/>
    </section>
)

}


// bg-[#171717] 