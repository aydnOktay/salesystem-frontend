import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { toggleSidebar } from "../store/layoutSlice";
import AccountIcon from "../../assets/Icons/AccountIcon";
import MessagesIcon from "../../assets/Icons/MessagesIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";
import FiltersIcon from "../../assets/Icons/FiltersIcon";
import ClipBoardIcon from "../../assets/Icons/ClipBoardIcon";

const Topbar = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.layout.sidebarOpen);

  return (
    <header className="bg-gray-50 shadow-sm">
      <div className="grid lg:grid-cols-10 grid-cols-3 items-center justify-between  border-2">

        <button
          onClick={() => dispatch(toggleSidebar())}
          className="lg:hidden col-span-1 p-4"
        >
          {sidebarOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
        {/* section 1 */}
        <div className="lg:flex hidden justify-between w-full lg:col-span-3 col-span-2 p-4 px-10 lg:border-r-2 m-0 lg:gap-0 gap-10">
          <div className="flex gap-4">
            <a href="">
              <div className="flex flex-col items-center justify-center">
                <AccountIcon width={24} height={24} />
                <p href="" className="text-xs">Account</p>
              </div>
            </a>

            <div className="flex flex-col items-center justify-center">
              <MessagesIcon width={24} height={24} />
              <p className="text-xs"> Messages</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center">
              <SearchIcon width={24} height={24} />{" "}
              <a className="text-xs">Search</a>
            </div>

            <div className="flex flex-col items-center justify-center">
              {" "}
              <FiltersIcon width={24} height={24} />
              <p className="text-xs">Filters</p>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="lg:col-span-7 px-10 p-4 lg:flex hidden lg:justify-start justify-end">
          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center">
              <AccountIcon width={24} height={24} />
              <p className="text-xs">Account</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ClipBoardIcon width={24} height={24} />
              <p className="text-xs"> Copy</p>
            </div>
          </div>
        </div>
        {/* <h1 className="text-xl font-semibold">CMS Yönetim Paneli</h1> */}
      </div>
    </header>
  );
};

export default Topbar;
