import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { toggleSidebar } from "../store/layoutSlice";

import {
    AdjustmentsHorizontalIcon,
    ChatBubbleBottomCenterIcon,
    MagnifyingGlassIcon,
    UserGroupIcon
} from '@heroicons/react/16/solid'


const Topbar = () => {

    const dispatch = useDispatch();
    const sidebarOpen = useSelector((state) => state.layout.sidebarOpen);

    return (
        <header className="bg-topbarcolor shadow-sm">
            <div className="flex items-center  p-4 border-b border-gray-500">
                <button onClick={() => dispatch(toggleSidebar())} className="lg:hidden">
                    {sidebarOpen ? (<XMarkIcon className="w-6 h-6" />) : (<Bars3Icon className="w-6 h-6" />)}
                </button>
                <nav className="flex space-x-1 m-2 justify-between">
                    <a href="#" className="flex flex-col items-center py-2 px-4 hover:text-topbaractive hover:bg-sidebarcolor">
                        <UserGroupIcon className="w-8 h-8" />
                        <span className="text-xs">Accounts</span>
                    </a>
                    <a href="#" className="flex flex-col items-center py-2 px-4 hover:text-topbaractive hover:bg-sidebarcolor">
                        <ChatBubbleBottomCenterIcon className="w-8 h-8" />
                        <span className="text-xs">Suggestions</span>
                    </a>

                    <a href="#" className="flex flex-col items-center py-2 px-4 hover:text-topbaractive hover:bg-sidebarcolor">
                        <MagnifyingGlassIcon className="w-8 h-8" />
                        <span className="text-xs">Search</span>
                    </a>
                    <a href="#" className="flex flex-col items-center py-2 px-4 hover:text-topbaractive hover:bg-sidebarcolor">
                        <AdjustmentsHorizontalIcon className="w-8 h-8" />
                        <span className="text-xs">Filtre</span>
                    </a>
                </nav>

            </div>



            { /*  */}
        </header>

    );

}

export default Topbar;