import { ClipboardDocumentCheckIcon, UserGroupIcon, UsersIcon, WrenchScrewdriverIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Page() {
    return (
        <div className="grid grid-cols-10 relative  bg-white">
            <div className="col-span-3 sm:col-span-3 border-r-2 h-[110vh] justify-start  mt-5 flex flex-col ">

                <div class="flex items-center space-x-5 mb-4">
                    <UsersIcon className="w-10 h-10 ml-8" />
                    <p class="font-semibold ml-8">Gestisci il tuo team</p>
                </div>
                <a href="/configure">
                    <div class="flex items-center bg-gray-50  space-x-5">
                        <WrenchScrewdriverIcon className="w-10 h-10 ml-8" />
                        <p class="font-semibold ml-8">Configura pipeline</p>
                    </div></a>


            </div>

            <div className="col-span-7 sm:col-span-7 mt-5 lg:flex lg:flex-col hidden">
                <h3 className="flex justify-between font-semibold px-3 py-3 mb-4 bg-gray-200 px-6">
                    <div>
                        Default
                        <span className="text-gray-400">| Tutti i gruppi</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="material-icons cursor-pointer">content_copy</span>
                        <span>Modifica</span>
                        <span className="material-icons cursor-pointer">delete</span>
                    </div>
                </h3>
                <div className="grid grid-cols-12 gap-4 px-3 py-3">
                    <div className="col-span-1 flex items-center justify-center">
                        <span className="material-icons">person</span>
                    </div>
                    <div className="col-span-4 flex items-center">Lead</div>
                    <div className="col-span-2 flex items-center justify-start">0%</div>
                    <div className="col-span-5 flex items-center justify-end space-x-4">
                        <span>Modifica</span>
                        <span className="material-icons cursor-pointer">delete</span>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 px-3 py-3  bg-gray-100">
                    <div className="col-span-1 flex items-center justify-center">
                        <span className="material-icons">arrow_forward</span>
                    </div>
                    <div className="col-span-4 flex items-center">Contattate</div>
                    <div className="col-span-2 flex items-center justify-start">0%</div>
                    <div className="col-span-5 flex items-center justify-end space-x-4">
                        <span>Modifica</span>
                        <span className="material-icons cursor-pointer">delete</span>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 px-3 py-3 ">
                    <div className="col-span-1 flex items-center justify-center">
                        <span className="material-icons">star</span>
                    </div>
                    <div className="col-span-4 flex items-center">Qualificate</div>
                    <div className="col-span-2 flex items-center justify-start">20%</div>
                    <div className="col-span-5 flex items-center justify-end space-x-4">
                        <span>Modifica</span>
                        <span className="material-icons cursor-pointer">delete</span>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 px-3 py-3 bg-gray-100">
                    <div className="col-span-1 flex items-center justify-center">
                        <span className="material-icons">thumb_up</span>
                    </div>
                    <div className="col-span-4 flex items-center">Proposte fatte</div>
                    <div className="col-span-2 flex items-center justify-start">50%</div>
                    <div className="col-span-5 flex items-center justify-end space-x-4">
                        <span>Modifica</span>
                        <span className="material-icons cursor-pointer">delete</span>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 p-3">
                    <div className="col-span-1 flex items-center justify-center">
                        <span className="material-icons">check</span>
                    </div>
                    <div className="col-span-4 flex items-center">Venduto</div>
                    <div className="col-span-2 flex items-center justify-start">100%</div>
                    <div className="col-span-5 flex items-center justify-end space-x-4">
                        <span>Modifica</span>
                        <span className="material-icons cursor-pointer">delete</span>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 p-3 bg-gray-100">
                    <div className="col-span-1 flex items-center justify-center">
                        <span className="material-icons">close</span>
                    </div>
                    <div className="col-span-4 flex items-center">Perse</div>
                    <div className="col-span-2 flex items-center justify-start">0%</div>
                    <div className="col-span-5 flex items-center justify-end space-x-4">
                        <span>Modifica</span>
                        <span className="material-icons cursor-pointer">delete</span>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )

}