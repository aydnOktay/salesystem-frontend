import {
  Bars2Icon,
  ChartBarIcon,
  CursorArrowRippleIcon,
  UserCircleIcon,
  UserGroupIcon
} from '@heroicons/react/16/solid'

import { ClipboardDocumentCheckIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const sidebarOpen = useSelector((state) => state.layout.sidebarOpen)

  return (
    <div
      className={`${sidebarOpen ? 'block w-[173px]' : 'hidden'
        } lg:block  bg-sidebarcolor text-white h-full`}
    >

      <nav className="flex flex-col space-y-5 mt-20">

        <a href="/tasks" className="flex flex-col items-center py-2 px-4 hover:bg-gray-700">
          <ClipboardDocumentCheckIcon className="w-8 h-8" />
          <span className="text-xs">Tasks</span>
        </a>

        <a href="/accounts" className="flex flex-col items-center py-2 px-4 text-sidebaractive  hover:bg-gray-700">
          <UserGroupIcon className="w-8 h-8" />
          <span className="text-xs">Accounts</span>
        </a>

        <a href="/contacts" className="flex flex-col items-center py-2 px-4 hover:bg-gray-700">
          <UserCircleIcon className="w-8 h-8" />
          <span className="text-xs">Contacts</span>
        </a>

        <a href="/opportunuties" className="flex flex-col items-center py-2 px-4 hover:bg-gray-700">
          <CursorArrowRippleIcon className="w-8 h-8" />
          <span className="text-xs">Opportunities</span>
        </a>

        <a href="/workflows" className="flex flex-col items-center py-2 px-4 hover:bg-gray-700">
          <Bars2Icon className="w-8 h-8" />
          <span className="text-xs">Workflows</span>
        </a>

        <a href="/insights" className="flex flex-col items-center py-2 px-4 hover:bg-gray-700">
          <ChartBarIcon className="w-8 h-8" />
          <span className="text-xs">Insights</span>
        </a>

        <a href="/insights" className="flex flex-col items-center py-2 px-4 hover:bg-gray-700">
          <Cog6ToothIcon className="w-8 h-8" />
          <span className="text-xs">Settings</span>
        </a>

      </nav>
    </div>
  );
};

export default Sidebar;