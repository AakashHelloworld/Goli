import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {CirclePlus} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resource() {
    return (
        <div className=" w-full" >
            <Input placeholder="www.resource.com" />
            <div className="w-full flex justify-end mt-2">
            <Button variant={"outline"}> <CirclePlus/> Add Resource</Button>
            </div>
        </div>
    )
}