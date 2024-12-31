import { Button } from "@/components/ui/button";
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Resource from "./Resource";
import { NodeContext } from "@/types/context";

export default function Resources({state, dispatch}:NodeContext) {
    return (
        <Card className="" >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
            <CardTitle>Add Resources</CardTitle>
            <CardDescription>Place to add resources</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="flex items-center" >
            <Resource state={state} dispatch={dispatch} />
        </CardContent>
    </Card>
    )
}