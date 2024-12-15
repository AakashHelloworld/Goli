import { Input } from "@/components/ui/input"
import { Home, Clock, Star} from "lucide-react"
import { Label } from "@/components/ui/label"
export default function Sidebar(){



    return(
        <>
            <div>
                <Input  placeholder="Search by title or topic" />
            </div>
            <div className="mt-4">
                <ul className="space-y-2">
                    <li className="cursor-pointer flex gap-2 items-center p-2 hover:bg-accent hover:text-accent-foreground rounded-md">
                    <Home className="dark:text-white h-4 w-4" /><Label  className="dark:text-white text-sm font-medium cursor-pointer" >Home</Label>
                    </li>

                    <li className="cursor-pointer flex gap-2 items-center p-2 hover:bg-accent hover:text-accent-foreground rounded-md">
                    <Clock className="dark:text-white h-4 w-4" /><Label  className="dark:text-white text-sm font-medium cursor-pointer" >Recent</Label>
                    </li>

                    <li className="cursor-pointer flex gap-2 items-center p-2 hover:bg-accent hover:text-accent-foreground rounded-md">
                    <Star className="dark:text-white h-4 w-4" /><Label  className="dark:text-white text-sm font-medium cursor-pointer" >Starred</Label>
                    </li>

                </ul>
            </div>
        </>
    )
}