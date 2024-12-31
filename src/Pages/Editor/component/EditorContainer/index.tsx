import NodeInformation from "../NodeInformation";
import Task from "../Task";
import Resources from "../Resources";
import PickDate from "../PickDate";
import { useNodeGlobal } from "@/nodesProvider/node-state-management";
import { NodeContext } from "@/types/context";

export default function Container () {
    const {state, dispatch}:NodeContext = useNodeGlobal()
    console.log('rendering...........')
    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            <NodeInformation state={state} dispatch={dispatch} />
            <PickDate />
            <Task  state={state} dispatch={dispatch}/>
            <Resources state={state} dispatch={dispatch} />
        </div>
    );
}