
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import TaskContainer from "./TaskContainer";
import { NodeContext } from "@/types/context";


export default function Task({state, dispatch}:NodeContext) {  
    
    
    
    return (
        
    <Card className="w-full mb-2" >
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
        <CardTitle>Add Tasks</CardTitle>
        <CardDescription>Place to add tasks</CardDescription>
        </div>
    </CardHeader>
    <CardContent className="">
        <TaskContainer state={state} dispatch={dispatch} />
    </CardContent>
</Card>
) }  