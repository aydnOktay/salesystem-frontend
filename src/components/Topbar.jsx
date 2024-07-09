import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { toggleSidebar } from "../store/layoutSlice";

const Topbar = () => {

    const dispatch = useDispatch();
    const sidebarOpen = useSelector((state) => state.layout.sidebarOpen);

    return (
        <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between p-4">
                <button onClick={() => dispatch(toggleSidebar())} className="lg:hidden">
                    {sidebarOpen ? (<XMarkIcon className="w-6 h-6" />) : (<Bars3Icon className="w-6 h-6" />)}
                </button>
                <h1 className="text-xl font-semibold">CMS PANEL</h1>
                
            </div>
            
            
            
            { /*  */}
        </header>
        
    );

}

export default Topbar;