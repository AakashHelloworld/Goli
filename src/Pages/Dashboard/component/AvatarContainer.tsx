import React, {useState} from "react"
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
import { useAuthGlobal } from "@/provider/state-management"
export default function AvatarContainer(){
    const {state}: any = useAuthGlobal()
    const [errorImg, seterrorImg] = useState(false)

    return(
        <div>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar >
                {
                    errorImg ? <span className="w-[30px] h-[30px] rounded-full border-white border-2 flex justify-center items-center cursor-pointer ">{state?.userdata?.username[0]}</span> :
            <img width={30} height={30} className="rounded-full cursor-pointer" src={state.userdata?.profilePic} onError={()=>{
                seterrorImg(true)
            }}/>
                }
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2 w-[20rem] mr-8">
        <DropdownMenuItem >
        {
                    errorImg ? <span className="w-[30px] h-[30px] rounded-full border-white border-2 flex justify-center items-center cursor-pointer ">{state?.userdata?.username[0]}</span> :
            <img width={30} height={30} className="rounded-full cursor-pointer" src={state.userdata?.profilePic} onError={()=>{
                seterrorImg(true)
            }}/>
                }
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