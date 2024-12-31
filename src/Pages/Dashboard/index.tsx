import DashboardContainer from "./component/DashboardContainer";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

export default function Container(){
    return(
        <main className="min-h-screen flex ">
            <section className="w-[20%] border-zinc-800 border-r-2 p-4">
                <Sidebar />
            </section>
            <section className="w-[80%]">
                <Navbar/>
                <DashboardContainer/> 
            </section>
        </main>
    )
}