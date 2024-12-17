import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { EllipsisVertical, Pencil, Delete } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Goalplan } from "@/types/flow"
import { Link } from "react-router-dom"
interface Props {
    goalInformation: Goalplan
}

export default function CardSmall({goalInformation}:Props){


    return(
        <Link to={goalInformation._id} >
        <Card className="w-[250px]">   
        <CardHeader className="p-3 mb-1">
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <Label>{goalInformation?.Title}</Label>
                </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <EllipsisVertical width={20} height={20} className="cursor-pointer" />
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
            </div>
        </CardHeader>
        <CardContent className="p-3 pt-0">
            <div className="bg-[#171717] w-full h-[7rem] rounded" >

            </div>

        </CardContent>
    </Card>
    </Link>
    )
}