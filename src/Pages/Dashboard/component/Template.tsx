import { Plus } from "lucide-react"
import { Label } from "@/components/ui/label"
export default function Template (){
    return (
        <div className="p-2 border-[#171717] border-2 rounded p-[1rem] flex gap-4 ">
        <div className="flex flex-col gap-4">
        <div className="bg-[#171717] hover:bg-[#171717]/40 hover:border-[#171717] hover:border-2  h-[7em] w-[10rem] rounded flex items-center justify-center cursor-pointer">
            <Plus />
        </div>
        <Label className="ml-4">Blank</Label>
        </div>
        
        <div className="flex flex-col gap-4">
        <div className="bg-[#171717] hover:bg-[#171717]/40 hover:border-[#171717] hover:border-2  h-[7em] w-[10rem] rounded flex items-center justify-center cursor-pointer">
        </div>
        <Label className="ml-4">Flow chart</Label>
        </div>
    </div>
    )
}