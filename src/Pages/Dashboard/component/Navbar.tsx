import AvatarContainer from "./AvatarContainer"
import Notification from "./Notification"

export default function Navbar(){

    return(
        <nav className="h-[4rem] flex justify-between items-center border-zinc-800 border-b-2 w-full p-4">
                <div>
                    <h1>Goli</h1>
                </div>
                <div className="space-x-4 flex items-center">
                <Notification/>
                <AvatarContainer/>
                </div>
        </nav>
    )
}