import useGet from "@/hooks/useGet";
import CardSmall from "./Card";
import { Goalplan } from "@/types/flow";
export default function CardList(){
    const {data: allPlanList , isLoading, isError} = useGet(
      ['GET ALL LIST'],
      {
          url: 'goalplan/',
      }

    )
    console.log(allPlanList, "All Plan list")
    if(isLoading){
        return (
        <div className="w-full flex justify-center items-center flex-wrap p-2 gap-[.6rem] mt-1">
            LOADING.....
        </div>
        )
    }

    if(isError){
        return(
            <div className="w-full flex items-center justify-center flex-wrap p-2 gap-[.6rem] mt-1">
                Error
            </div>
        )

    }


    return(
        <div className="w-full flex items-center flex-wrap justify-between p-2 gap-[.6rem] mt-1">
            {
                !!allPlanList?.data?.length && allPlanList?.data?.map((data: Goalplan)=>{
                        return <CardSmall key={data?._id} goalInformation={data} />
                })
            }
        </div>
    )
}