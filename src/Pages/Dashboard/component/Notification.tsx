import { BellRing } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { Label } from "@/components/ui/label"
export default function Notification(){
    return(
        <div>
            <Sheet>
      <SheetTrigger asChild>
            <BellRing width={20} height={20} className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification (10)</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
        </div>
    )
}