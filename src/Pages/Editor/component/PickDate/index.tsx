import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus} from "lucide-react";
import DatePopover from "./DatePopover";

export default function PickDate() {
    return (           
    
    <Card className="w-full mb-2">
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
            <CardTitle className="font-sans font-semibold text-md">Set Date and Deadline to Goals</CardTitle>
            <CardDescription className="text-sm text-[#fff]/50">Set dates and deadlines for your goals.</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="flex gap-2 items-center" >
                <DatePopover  />
            <Minus />
                <DatePopover />
        </CardContent>

    </Card>

    )
}