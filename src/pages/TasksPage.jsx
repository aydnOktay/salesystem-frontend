import { ClockIcon, EllipsisVerticalIcon, ShareIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Page() {
  return (

    <div className="grid grid-cols-10 bg-white relative">

      <div className="col-span-7 sm:col-span-7 gap-x-3 p-4 border-2 mx-8 my-5">

        <div className="grid grid-cols-3 gap-x-3 p-6 items-center">

          <div className="flex items-center space-x-2 justify-start">
            <div className="bg-[#02FFD1] p-2 border-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <span className="text-sm text-gray-500">Inserisci una task...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full h-6 w-6 justify-center flex items-center">SP</p>
            <span className="text-sm text-gray-500">Account contact</span>
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ClockIcon width={30} height={30} /></a>
            <a href=""><UserPlusIcon width={30} height={30} /></a>
          </div>

        </div>

      </div>

      <div className="col-span-3 sm:col-span-3  py-2 mx-8 my-5">
        <div className="grid  p-6">
          <div className="flex justify-end">
            <div className="bg-[#02FFD1] p-2 border-2 ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-12 w-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      <div className="col-span-10 sm:col-span-10 gap-x-4 p-2 mx-8">

        <div className="grid grid-cols-4 gap-x-4 py-4 items-center">
          <div className="flex items-center space-x-2 justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">Sai come...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full h-6 w-6 justify-center flex items-center">SP</p>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">17:13</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="font-bold">16 Jul</p>
            <img src="/person1.jpeg" class="h-[20px] w-[20px] rounded-full" alt="Matteo Mirabella" />
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ShareIcon width={20} height={20} /></a>
            <a href=""><EllipsisVerticalIcon width={20} height={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-4 bg-gray-50 gap-x-4 py-4  items-center">
          <div className="flex items-center space-x-2 justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">Sai come...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full h-6 w-6 flex justify-center items-center">SP</p>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">17:13</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="font-bold">16 Jul</p>
            <img src="/person1.jpeg" class="h-[20px] w-[20px] rounded-full" alt="Matteo Mirabella" />
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ShareIcon width={20} height={20} /></a>
            <a href=""><EllipsisVerticalIcon width={20} height={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-4 py-4  items-center">
          <div className="flex items-center space-x-2 justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">Sai come...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full justify-center h-6 w-6 flex items-center">SP</p>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">17:13</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="font-bold">16 Jul</p>
            <img src="/person1.jpeg" class="h-[20px] w-[20px] rounded-full" alt="Matteo Mirabella" />
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ShareIcon width={20} height={20} /></a>
            <a href=""><EllipsisVerticalIcon width={20} height={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-4 bg-gray-50 gap-x-4 py-4 items-center">
          <div className="flex items-center space-x-2 justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">Sai come...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full h-6 w-6 justify-center flex items-center">SP</p>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">17:13</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="font-bold">16 Jul</p>
            <img src="/person1.jpeg" class="h-[20px] w-[20px] rounded-full" alt="Matteo Mirabella" />
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ShareIcon width={20} height={20} /></a>
            <a href=""><EllipsisVerticalIcon width={20} height={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-4 py-4 items-center">
          <div className="flex items-center space-x-2 justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">Sai come...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full h-6 w-6 justify-center flex items-center">SP</p>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">17:13</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="font-bold">16 Jul</p>
            <img src="/person1.jpeg" class="h-[20px] w-[20px] rounded-full" alt="Matteo Mirabella" />
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ShareIcon width={20} height={20} /></a>
            <a href=""><EllipsisVerticalIcon width={20} height={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-4 bg-gray-50 gap-x-4 py-4 items-center">
          <div className="flex items-center space-x-2 justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">Sai come...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full h-6 w-6 justify-center flex items-center">SP</p>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">17:13</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="font-bold">16 Jul</p>
            <img src="/person1.jpeg" class="h-[20px] w-[20px] rounded-full" alt="Matteo Mirabella" />
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ShareIcon width={20} height={20} /></a>
            <a href=""><EllipsisVerticalIcon width={20} height={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-4 py-4 items-center">
          <div className="flex items-center space-x-2 justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">Sai come...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full h-6 w-6 justify-center flex items-center">SP</p>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">17:13</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="font-bold">16 Jul</p>
            <img src="/person1.jpeg" class="h-[20px] w-[20px] rounded-full" alt="Matteo Mirabella" />
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ShareIcon width={20} height={20} /></a>
            <a href=""><EllipsisVerticalIcon width={20} height={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-4  bg-gray-50 gap-x-4 py-4  items-center">
          <div className="flex items-center space-x-2 justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">Sai come...</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="bg-[#02FFD1] text-black rounded-full h-6 w-6 justify-center flex items-center">SP</p>
            <p className="font-semibold">Salespark</p>
            <span className="text-sm text-gray-500">17:13</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <p className="font-bold">16 Jul</p>
            <img src="/person1.jpeg" class="h-[20px] w-[20px] rounded-full" alt="Matteo Mirabella" />
          </div>

          <div className="flex items-center space-x-2 justify-end">
            <a href=""><ShareIcon width={20} height={20} /></a>
            <a href=""><EllipsisVerticalIcon width={20} height={20} /></a>
          </div>
        </div>

      </div>


    </div>
  )
}