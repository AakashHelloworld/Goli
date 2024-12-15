import { Button } from "@/components/ui/button";
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Resource from "./Resource";


export default function Resources() {
    return (
        <Card className="" >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
            <CardTitle>Add Resources</CardTitle>
            <CardDescription>Place to add resources</CardDescription>
            </div>
            <Button> Save</Button>
        </CardHeader>
        <CardContent className="flex items-center" >
            <Resource />
        </CardContent>
    </Card>
    )
}