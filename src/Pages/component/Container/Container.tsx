import { Button } from "@/components/ui/button";
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Pencil, Minus} from "lucide-react";
import TaskContainer from "./Component/TaskContainer";
import { CalendarIcon } from "@radix-ui/react-icons"
import PickDate from "./Component/PickDate";



export default function Container () {
    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            <div    className="w-full p-2">
                <div className="flex gap-1 items-center">
                    <Label className="font-sans text-xl">Node name</Label>
                    <Pencil className="h-3 w-3 cursor-pointer " />
                </div>
                <div className="flex gap-1 items-center">
            <p className="text-sm text-muted-foreground">Description of the node name</p>
                </div>
            </div>
            <Card className="w-full mb-2">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                    <CardTitle>Set Date and Deadline to Goals</CardTitle>
                    <CardDescription>Make sure you set a date and deadline to your goals</CardDescription>
                    </div>
                    <Button>Save Date</Button>
                </CardHeader>
                <CardContent className="flex gap-2 items-center" >
                        <PickDate />
                    <Minus />
                        <PickDate />
                </CardContent>

            </Card>
            <Card className="" >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                    <CardTitle>Add Tasks</CardTitle>
                    <CardDescription>Place to add tasks</CardDescription>
                    </div>
                    <Button>Add Task</Button>
                </CardHeader>
                <CardContent className="">
                    <TaskContainer />
                </CardContent>
            </Card>
        </div>
    );
}