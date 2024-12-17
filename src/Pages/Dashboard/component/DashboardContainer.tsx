import { List, Grid2X2 } from "lucide-react"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CardList from "./CardList"
import CreatePlan from "./CreatePlan"
  

export default function DashboardContainer(){

return(
    <section className="w-full p-8">
        
        <CreatePlan/>
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