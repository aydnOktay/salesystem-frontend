import React from "react";
import { useSelector } from "react-redux";
import {
  UsersIcon,
  DocumentTextIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const sidebarOpen = useSelector((state) => state.layout.sidebarOpen);

  return (
    <div
      className={`${sidebarOpen ? "block" : "hidden"
        } lg:block lg:w-64 bg-gray-800 text-white`}
    >
      <div className="p-4">
      </div>
      <nav className="mt-4">
        <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <DocumentTextIcon className="w-5 h-5 mr-2" />
          Tasks
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <UsersIcon className="w-5 h-5 mr-2" />
          Accounts
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <PhotoIcon className="w-5 h-5 mr-2" />
          Contacts
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <PhotoIcon className="w-5 h-5 mr-2" />
          Opporunuties
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <PhotoIcon className="w-5 h-5 mr-2" />
          Workflows
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700">
          <PhotoIcon className="w-5 h-5 mr-2" />
          Insights
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;