import { ClipboardDocumentCheckIcon, UserGroupIcon, UsersIcon, WrenchScrewdriverIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Page() {
    return (
        <div className="grid grid-cols-10 relative  bg-white">
            <div className="col-span-3 sm:col-span-3 border-r-2 h-[110vh] p-8 flex flex-col ">

                <div class="flex items-center space-x-5 bg-gray-50 mb-4">
                    <UsersIcon className="w-10 h-10" />
                    <p class="font-semibold">Gestisci il tuo team</p>
                </div>
                <div class="flex items-center space-x-5">
                    <WrenchScrewdriverIcon className="w-10 h-10" />
                    <p class="font-semibold">Configura pipeline</p>
                </div>

            </div>

            <div className="col-span-7 sm:col-span-7 p-8 lg:flex lg:flex-col hidden">
                <div className="flex flex-col col-span-1 px-5  py-4">

                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )

}