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
            <CardTitle>Set Date and Deadline to Goals</CardTitle>
            <CardDescription>Make sure you set a date and deadline to your goals</CardDescription>
            </div>
            <Button >Save</Button>
        </CardHeader>
        <CardContent className="flex gap-2 items-center" >
                <DatePopover />
            <Minus />
                <DatePopover />
        </CardContent>

    </Card>

    )
}