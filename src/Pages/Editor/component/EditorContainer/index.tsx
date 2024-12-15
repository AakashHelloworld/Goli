import NodeInformation from "../NodeInformation";
import Task from "../Task/Task";
import Resources from "../Resources";
import PickDate from "../PickDate";

export default function Container () {

    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            <NodeInformation />
            <PickDate />
            <Task />
            <Resources />
        </div>
    );
}