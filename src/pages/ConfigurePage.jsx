import { ClipboardDocumentCheckIcon, UserGroupIcon, UsersIcon, WrenchScrewdriverIcon } from "@heroicons/react/16/solid";
import React from "react";
import ToggleSwitch from './ToggleSwitch';
import { Link } from 'react-router-dom';

export default function Page() {

    return (
        <div className="grid grid-cols-10 relative  bg-white">
            
            <div className="col-span-3 sm:col-span-3 border-r-2 h-[110vh] justify-start  mt-5 flex flex-col ">

                <a href="/settings">
                    <div class="flex items-center space-x-5  bg-gray-50  mb-4">
                        <UsersIcon className="w-10 h-10 ml-8" />
                        <p class="font-semibold ml-8">Gestisci il tuo team</p>
                    </div>
                </a>

                <div class="flex items-center space-x-5 ">
                    <WrenchScrewdriverIcon className="w-10 h-10 ml-8" />
                    <p class="font-semibold ml-8">Configura pipeline</p>
                </div>

            </div>

            <div className="col-span-7 sm:col-span-7 mt-5 lg:flex lg:flex-col hidden">

                <h3 className="text-xl font-semibold mb-4 p-2  bg-gray-200 px-6">Impostazioni team</h3>
                <div className="space-y-6 p-6">
                    <div className="items-center justify-between w-3/5">
                        <span className="text-gray-500">Nome team</span>
                        <div className="flex items-center justify-between">
                            <span className="mr-2">Funnel Consulting</span>
                            <span className="font-bold">Modifica</span>
                        </div>
                        <hr className="w-full" />
                    </div>
                    <div className="flex items-center mt-4 toggle-wrapper">
                        {/* <ToggleSwitch checked={isChecked} onChange={handleToggleChange} /> */}
                        <span className="ml-3 text-md font-medium text-gray-900">
                            Add all enabled users to all existing and future accounts automatically
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold bg-gray-200 px-6 py-3">Outstanding invites</h3>
                    <p className="p-6 text-gray-400">No outstanding invites.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold bg-gray-200 px-6 py-3">Non grouped users +1</h3>
                    <div className="flex items-center space-x-4 p-6">
                        <div className="flex items-center space-x-2">
                            <div className="bg-green-400 h-9 w-9 rounded-full flex items-center justify-center">MM</div>
                            <span>Matteo Mirabella</span>
                            <span className="text-sm font-bold">Admin</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold bg-gray-200 py-3 px-6">User disabilitati 0</h3>
                </div>
            </div>
        </div>
    )

}