import { ArrowLongUpIcon, EllipsisHorizontalCircleIcon, EllipsisVerticalIcon, InformationCircleIcon, StopCircleIcon, XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Page() {
  return (

    <div className="grid row-span-12 grid-cols-10 gap-4  relative  p-7 h-full">

      <div
        className="row-span-4 col-span-10 grid grid-cols-10 gap-4"
      >
        <div className="col-span-2 sm:col-span-2 border-2 p-7 bg-[#02FFD1]">
          <div className="flex items-center space-x-2 justify-start">
            <h1 className="font-bold xl">RENEUVE</h1>
            <InformationCircleIcon width={15} height={15} />
            <EllipsisVerticalIcon width={15} height={15} />
          </div>
          <div className="flex items-center space-x-2 justify-start">
            <p className="font-bold xl">10.000</p> <ArrowLongUpIcon width={15} height={15} /> +4%
          </div>
          <p className="font-bold">Euro</p>
        </div>

        <div className="col-span-2 sm:col-span-2 border-2 p-7 ">
          <div className="flex items-center space-x-2 justify-start">
            <h1 className="font-bold xl">AVG SALES CYCLE</h1>
            <InformationCircleIcon width={15} height={15} />
            <EllipsisVerticalIcon width={15} height={15} />
          </div>
          <div className="flex items-center space-x-2 justify-start">
            <p className="font-bold xl">0</p> <StopCircleIcon width={15} height={15} /> +0%
          </div>
          <p className="font-bold">Euro</p>
        </div>

        <div className="col-span-2 sm:col-span-2 border-2 p-7">
          <div className="flex items-center space-x-2 justify-start">
            <h1 className="font-bold xl">AVG VALUE</h1>
            <InformationCircleIcon width={15} height={15} />
            <EllipsisVerticalIcon width={15} height={15} />
          </div>
          <div className="flex items-center space-x-2 justify-start">
            <p className="font-bold xl">10.000</p> <StopCircleIcon width={15} height={15} /> +0%
          </div>
          <p className="font-bold">Euro</p>
        </div>

        <div className="col-span-2 sm:col-span-2 border-2 p-7">
          <div className="flex items-center space-x-2 justify-start">
            <h1 className="font-bold xl">Venduti</h1>
            <InformationCircleIcon width={15} height={15} />
            <EllipsisVerticalIcon width={15} height={15} />
          </div>
          <div className="flex items-center space-x-2 justify-start">
            <p className="font-bold xl">10.000</p> <ArrowLongUpIcon width={15} height={15} /> +4%
          </div>
          <p className="font-bold">Euro</p>
        </div>

        <div className="col-span-2 sm:col-span-2 border-2 p-7">
          <div className="flex items-center space-x-2 justify-start">
            <h1 className="font-bold xl">Nuove</h1>
            <InformationCircleIcon width={15} height={15} />
            <EllipsisVerticalIcon width={15} height={15} />
          </div>
          <div className="flex items-center space-x-2 justify-start">
            <p className="font-bold xl">10.000</p> <ArrowLongUpIcon width={15} height={15} /> +1%
          </div>
          <p className="font-bold">Euro</p>
        </div>

        <div className="col-span-4 sm:col-span-4 border-2 p-7 ">
        
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-sm font-semibold">EXPECTED REVENIEW VS REVENIEW GOAL</h2>
              <button class="text-gray-500">⋮</button>
            </div>
            <div class="space-y-2">
              <div class="flex items-center">
                <span class="text-2xl font-bold mr-2">€10K</span>
                <div class="w-full bg-emerald-400 h-4 rounded"></div>
                <span class="ml-2 text-sm">Ottenuti</span>
              </div>
              <div class="flex items-center">
                <span class="text-2xl font-bold mr-2">€2,5K</span>
                <div class="w-1/4 bg-indigo-700 h-4 rounded"></div>
                <span class="ml-2 text-sm">Aspettativa</span>
              </div>
            </div>
        </div>

        <div className="col-span-4 sm:col-span-4 border-2 p-7 ">

            <div class="flex justify-between items-center mb-4">
              <h2 class="text-sm font-semibold">Revenue during time period</h2>
              <button class="text-gray-500">⋮</button>
            </div>
            <div class="space-y-2">
              <div class="flex items-center">
                <span class="text-2xl font-bold mr-2">€10K</span>
                <div class="w-full bg-emerald-400 h-4 rounded"></div>
                <span class="ml-2 text-sm">Ottenuti</span>
              </div>
              <div class="flex items-center">
                <span class="text-2xl font-bold mr-2">€2,5K</span>
                <div class="w-1/4 bg-indigo-700 h-4 rounded"></div>
                <span class="ml-2 text-sm">Aspettativa</span>
              </div>
            </div>

        </div>

        <div className="col-span-2 sm:col-span-2 border-2 p-7 bg-[#02FFD1]">
          
            <div class="flex justify-between items-center mb-4">
              <div>
                <span class="text-2xl font-bold">26</span>
                <span class="text-sm">GIU</span>
                <span class="text-xs">2024</span>
              </div>
              <button class="text-gray-700">⋮</button>
            </div>
            <div>
              <h2 class="text-sm font-semibold">INSERIRE DATI</h2>
              <span class="text-2xl font-bold">10.000</span>
              <span class="text-sm">Euro</span>
            </div>
        </div>
      </div>

      <div
        className="row-span-8 col-span-10 grid grid-cols-10 gap-4 "
      >
        <div className="col-span-7 sm:col-span-7 border-2 p-7 mt-4 max-h-[428px] overflow-auto custom-scroll">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 justify-start mb-4">
              <h1 className="font-bold xl">EXPECTED REVENIEW VS REVENIEW GOAL</h1>
              <InformationCircleIcon width={25} height={25} />
            </div>
            <EllipsisVerticalIcon width={25} height={25} />
          </div>

          <div className="grid grid-cols-4 gap-x-4 bg-gray-50 my-3 items-center">
            <div class="flex items-center space-x-3 justify-start ">
              <img src="/mattia.jpg" class="h-[50px] w-[50px] rounded-full " alt="Matteo Mirabella" />
              <p class="font-semibold">Mattia Noris</p>
            </div>
            <div className="items-center">aaydinoktay@gmail.com</div>
            <div className="items-center" >Funnel Consluting</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>  <div className="grid grid-cols-4 gap-x-4 bg-gray-50 my-3 items-center">
            <div class="flex items-center space-x-3 justify-start ">
              <img src="/mattia.jpg" class="h-[50px] w-[50px] rounded-full " alt="Matteo Mirabella" />
              <p class="font-semibold">Mattia Noris</p>
            </div>
            <div className="items-center">aaydinoktay@gmail.com</div>
            <div className="items-center" >Funnel Consluting</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-4 bg-gray-50 my-3 items-center">
            <div class="flex items-center space-x-3 justify-start ">
              <img src="/mattia.jpg" class="h-[50px] w-[50px] rounded-full " alt="Matteo Mirabella" />
              <p class="font-semibold">Mattia Noris</p>
            </div>
            <div className="items-center">aaydinoktay@gmail.com</div>
            <div className="items-center" >Funnel Consluting</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-4 my-3 items-center">
            <div class="flex items-center space-x-3 justify-start">
              <img src="/person1.jpeg" class="h-[50px] w-[50px] rounded-full" alt="Matteo Mirabella" />
              <p class="font-semibold">Oktay Aydın</p>
            </div>
            <div>aaydinoktay@gmail.com</div>
            <div>Funnel Consluting</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-4 bg-gray-50 my-3 items-center">
            <div class="flex items-center space-x-3 justify-start ">
              <img src="/mattia.jpg" class="h-[50px] w-[50px] rounded-full " alt="Matteo Mirabella" />
              <p class="font-semibold">Mattia Noris</p>
            </div>
            <div className="items-center">aaydinoktay@gmail.com</div>
            <div className="items-center" >Funnel Consluting</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-4 my-3 items-center">
            <div class="flex items-center space-x-3 justify-start">
              <img src="/person1.jpeg" class="h-[50px] w-[50px] rounded-full" alt="Matteo Mirabella" />
              <p class="font-semibold">Oktay Aydın</p>
            </div>
            <div>aaydinoktay@gmail.com</div>
            <div>Funnel Consluting</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-4 bg-gray-50 my-3 items-center">
            <div class="flex items-center space-x-3 justify-start ">
              <img src="/mattia.jpg" class="h-[50px] w-[50px] rounded-full " alt="Matteo Mirabella" />
              <p class="font-semibold">Mattia Noris</p>
            </div>
            <div className="items-center">aaydinoktay@gmail.com</div>
            <div className="items-center" >Funnel Consluting</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#02FFD0" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>
        </div>

        <div className="col-span-3 sm:col-span-3 border-2 p-7 mt-4 max-h-[428px] overflow-auto custom-scroll bg-white">

          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg font-semibold">ALL DATA RECAP</h2>
            <button class="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>

          <div class="space-y-4">
            <div class="flex justify-between items-center bg-gray-50 px-2 py-3 rounded">
              <div>
                <p class="font-medium">REVENUE</p>
                <p class="text-sm text-gray-500">Euro</p>
              </div>
              <div class="flex items-center">
                <span class="text-xl font-bold mr-2">10.000</span>
                <span class="text-green-500 text-sm">+4%</span>
              </div>
            </div>

            <div class="flex justify-between items-center px-2 py-3 rounded">
              <div>
                <p class="font-medium">AVG SALES CYCLE</p>
                <p class="text-sm text-gray-500">Euro</p>
              </div>
              <div class="flex items-center">
                <span class="text-xl font-bold mr-2">0</span>
                <span class="text-orange-500 text-sm">+0%</span>
              </div>
            </div>

            <div class="flex justify-between items-center bg-gray-50 px-2 py-3 rounded">
              <div>
                <p class="font-medium">AVG VALUE</p>
                <p class="text-sm text-gray-500">Euro</p>
              </div>
              <div class="flex items-center">
                <span class="text-xl font-bold mr-2">10.000</span>
                <span class="text-orange-500 text-sm">+0%</span>
              </div>
            </div>

            <div class="flex justify-between items-center px-2 py-3 rounded">
              <div>
                <p class="font-medium">VENDUTI</p>
                <p class="text-sm text-gray-500">Numero unità</p>
              </div>
              <div class="flex items-center">
                <span class="text-xl font-bold mr-2">12</span>
                <span class="text-green-500 text-sm">+4%</span>
              </div>
            </div>

            <div class="flex justify-between items-center bg-gray-50 px-2 py-3 rounded">
              <div>
                <p class="font-medium">NUOVE</p>
                <p class="text-sm text-gray-500">Numero unità</p>
              </div>
              <div class="flex items-center">
                <span class="text-xl font-bold mr-2">2</span>
                <span class="text-green-500 text-sm">+1%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}