import useGet from "@/hooks/RequestServer/useGet";
import CardSmall from "./Card";
import { Goalplan } from "@/types/flow";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CardList(){
    const {data: allPlanList , isLoading, isError} = useGet(
      ['GET ALL LIST'],
      {
          url: 'goalplan/',
      }

    )
    if(isLoading){
        return (
        <div className="w-full flex justify-center items-center flex-wrap p-2 gap-[.6rem] mt-1">
            LOADING.....
        </div>
        )
    }

    if(isError){
        return(
        <div className="h-screen flex-col flex  gap-2 justify-center items-center">
            <Label>Check your connection and try again</Label>
            <Button onClick={()=>window.location.reload()}>Refresh</Button>
        </div>
        )     
    }
    


    return(
        <div className="w-full grid grid-cols-4 p-2 gap-[.6rem] mt-1">
            {
                !!allPlanList?.data?.length && allPlanList?.data?.map((data: Goalplan)=>{
                        return <CardSmall key={data?._id} goalInformation={data} />
                })
            }
        </div>
    )
}