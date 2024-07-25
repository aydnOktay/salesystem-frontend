import { ArrowLongUpIcon, EllipsisHorizontalCircleIcon, EllipsisVerticalIcon, InformationCircleIcon, StopCircleIcon, XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Page() {
  return (

    <div className="grid grid-cols-10 gap-x-4 relative  m-7">

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

      <div className="col-span-4 sm:col-span-4 border-2 p-7 mt-4">
        <div className="flex items-center space-x-2 justify-start">
          <h1 className="font-bold xl">EXPECTED REVENIEW VS REVENIEW GOAL</h1>
          <InformationCircleIcon width={15} height={15} />
          <EllipsisVerticalIcon width={15} height={15} />
        </div>
      </div>

      <div className="col-span-4 sm:col-span-4 border-2 p-7 mt-4">
        <div className="flex items-center space-x-2 justify-start">
          <h1 className="font-bold xl">Revenue during time period</h1>
          <InformationCircleIcon width={15} height={15} />
          <EllipsisVerticalIcon width={15} height={15} />
        </div>
      </div>

      <div className="col-span-2 sm:col-span-2 border-2 p-7 bg-[#02FFD1] mt-4">
        <div className="flex items-center space-x-2 justify-start">
          <h1 className="font-bold  border-r-2 items-center"> 26 <br /> GUI <br /> <p className="text-sx">2024</p> </h1>
          <EllipsisVerticalIcon width={15} height={15} />
        </div>
      </div>

      <div className="col-span-7 sm:col-span-7 border-2 p-7 mt-4">

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

      <div className="col-span-3 sm:col-span-3 border-2 p-7 mt-4">

      </div>

    </div>
  )
}