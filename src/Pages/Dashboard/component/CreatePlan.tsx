import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {Loader2, Plus} from "lucide-react"
import usePost from "@/hooks/RequestServer/usePost";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"


export default function CreatePlan(){
    const navigate = useNavigate()
    const { mutateAsync: createPlanSubmit, isLoading } = usePost({
        url: "goalplan/",
        onSuccess: (data) => {
            toast.success('Plan Successfully Created')
            
            navigate(`${data?.data?._id}`)
        },
        onError: () => {
            toast.error('Some Thing Got Wrong Try Again')
        },
    });


    return(
        <div className="w-full flex justify-between items-center p-2 mt-2">
        <div>
            <Label className="text-xl">Boards in this team</Label>
        </div>
        <div>
            <Button 

             disabled={isLoading}
             onClick={() => createPlanSubmit(undefined)}
            className="w-[8rem] h-[2rem]">{ isLoading ? <Loader2 /> : <><Plus width={10} height={10}/> Create new</>}</Button>
        </div>
    </div>
    )
}