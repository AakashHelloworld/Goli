import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Pencil} from "lucide-react";




export default function NodeInformation() {
    
    return(

        <div    className="w-full p-2 flex justify-between">
        <div className="">
        <div className="flex gap-1 items-center">
            <Label className="font-sans text-xl">Node name</Label>
            <Pencil className="h-3 w-3 cursor-pointer " />
        </div>
        <div className="flex gap-1 items-center">
         <p className="text-sm text-muted-foreground">Description of the node name</p>
        </div>
        </div>
        <Button variant={"destructive"} >Delete</Button>
            </div>

    )

}