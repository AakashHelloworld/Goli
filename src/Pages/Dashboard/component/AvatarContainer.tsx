import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar } from "@/components/ui/avatar"
import { User, Settings, LogOut } from "lucide-react"  
import { useGlobalContext } from "@/provider/state-management"
export default function AvatarContainer(){
    const {state}: any = useGlobalContext()

    return(
        <div>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar >
            <img width={30} height={30} className="rounded-full cursor-pointer" src={state.userdata?.profilePic} />
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2 w-[20rem] mr-8">
        <DropdownMenuItem >
            <img width={30} height={30} className="rounded-full" src={state.userdata?.profilePic} />
             <DropdownMenuLabel className='font-bold capitalize'>{state?.userdata?.username}</DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" >
            <User/>
             <DropdownMenuLabel className='font-bold'>{state?.userdata?.email}</DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuItem
        className="cursor-pointer"
        >
            <Settings/>
             <DropdownMenuLabel className='font-bold capitalize'>Setting</DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        className="cursor-pointer"
        >
            <LogOut/>
             <DropdownMenuLabel className='font-bold capitalize'>Logout</DropdownMenuLabel>
        </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}