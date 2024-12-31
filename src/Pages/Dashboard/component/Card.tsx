import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { EllipsisVertical, Pencil, Delete, Play } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Goalplan } from "@/types/flow"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { timeAgo } from "@/lib/timeAgo"
interface Props {
    goalInformation: Goalplan
}

export default function CardSmall({goalInformation}:Props){


    return(
        <Card className="w-[250px]">   
        <CardContent className="p-3 mt-3 pt-0">
            <div className="bg-[#171717] w-full h-[7rem] relative rounded" >
            <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <EllipsisVertical width={20} height={20} className="cursor-pointer absolute top-1 right-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]">
                        <DropdownMenuItem className="cursor-pointer" >
                            <DropdownMenuLabel className='font-bold capitalize flex gap-4'><Pencil width={15} height={15} /> Rename</DropdownMenuLabel>
                        </DropdownMenuItem>
      
                        <DropdownMenuItem className="cursor-pointer">
                            <DropdownMenuLabel className='font-bold capitalize flex gap-4'><Delete width={15} height={15} />Delete</DropdownMenuLabel>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex w-full justify-between mt-2 items-center">
            <div className="flex flex-col">
                <Label>{goalInformation?.Title}</Label>
                <Label className="text-[12px] text-[white]/70">{goalInformation?.CreatedAt ? timeAgo(goalInformation?.CreatedAt) : '-'}</Label>
            </div>
            <Link to={goalInformation._id} >
                <Button className="py-[2px] h-[1.8rem] px-2 cursor-pinter text-[12px]">
                    Run
                    <Play  />
                </Button>
            </Link>
            </div>
        </CardContent>
    </Card>
    )
}