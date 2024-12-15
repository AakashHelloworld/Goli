
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {CirclePlus} from "lucide-react";
import TaskContainer from "./TaskContainer";
import { Button } from "@/components/ui/button";



export default function Task() {  return (

    <Card className="w-full mb-2" >
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
        <CardTitle>Add Tasks</CardTitle>
        <CardDescription>Place to add tasks</CardDescription>
        </div>
        <Button variant={"outline"}><CirclePlus/> Add Task</Button>
    </CardHeader>
    <CardContent className="">
        <TaskContainer />
    </CardContent>
</Card>
) }  