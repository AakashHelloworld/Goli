import { useState, useEffect, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Trash2 , Ban, Save} from "lucide-react";
import usePatch from "@/hooks/RequestServer/usePatch";
import { Button } from "@/components/ui/button";
import { NodeContext } from "@/types/context";



export default function NodeInformation({ state, dispatch }: NodeContext) {
  const [edit, setEdit] = useState(false);
  const [nameText, setNameText] = useState(state?.currentnode?.Name || "");
    const [descriptionText, setDescriptionText] = useState(
        state?.currentnode?.Description || ""
    );

  useEffect(() => {
      if (state?.currentnode) {
        setNameText(state.currentnode.Name || "");
        setDescriptionText(state.currentnode.Description || "");
      }
    }, [state?.currentnode]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const { mutateAsync: updateContent } = usePatch({
    url: `/node/${state?.currentnode?.NodeReference}`,
    onSuccess: (data) => {
      if(data.data){
        if(dispatch){
          dispatch({ type: "UPDATE_NODE", payload: data.data });
        }
      }
    },
    });


  return (
    <div ref={containerRef} className="w-full p-2 flex justify-between">
      <div>
        <div className="flex gap-1 items-center">
          {edit ? (
            <Input
              
              value={nameText}
              className="mb-2 w-full"
              onChange={(e) => setNameText(e.target.value)}
            />
          ) : (
            <Label
              onClick={() => setEdit(true)}
              className="font-sans font-semibold text-md cursor-pointer"
            >
              {nameText}
            </Label>
          )}
        </div>
        <div className="flex gap-1 items-center">
          {edit ? (
            <Input
              value={descriptionText}
              onChange={(e) => setDescriptionText(e.target.value)}
            />
          ) : (
            <p
              onClick={() => setEdit(true)}
              className="text-sm text-[#fff]/50 cursor-pointer"
            >
              {descriptionText}
            </p>
          )}
        </div>
      </div>
      {
        edit ? 
          <div className="flex flex-col gap-1 items-center">
            <Button
              onClick={() => {
                setEdit(false);
                updateContent({
                  Name: nameText,
                  Description: descriptionText,
                });
              }}
              variant={"outline"}
>
              <Save />
            </Button>
            <Button 
            onClick={() => {
              setNameText(state?.currentnode?.Name || "");
              setDescriptionText(state?.currentnode?.Description || "");
              setEdit(false)}} variant={"outline"}>
              <Ban />
            </Button>
          </div>
          : 
          <Trash2 color="#800000"  className="cursor-pointer"/>
      }
    </div>
  );
}
