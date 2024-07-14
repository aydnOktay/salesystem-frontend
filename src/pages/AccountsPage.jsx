import moment from "moment";
import React from "react";
const person = [
  {
    company: "Salesflare",
    name: "Mattia",
    message:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, animi quis numquam soluta nobis explicabo! Laboriosam dolorum culpa aliquid ducimus",

    imageSrc: "/mattia.jpg",
    age: 23,
    date: "2021-10-10",
    hour: "10.45",
  },
  {
    company: "Funnel Consulting",
    name: "Oktay",
    message: "Hi oktay how are you?",
    imageSrc: "/person1.jpeg",
    date: "2021-10-10",
    age: 24,
  },
];

export default function Page({ params }) {
  const id = params?.id;
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <>
      <div className="grid grid-cols-10 bg-white relative">
        <div className="bg-[#02FFD1] p-2 absolute bottom-5 left-5 border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        {/* person list */}
        <div className="sm:border-r-2 h-[110vh] col-span-5 sm:col-span-3 -mx-[1px]">
          <div className="p-6 ">
            {" "}
            <h1>1 account by last interaction</h1>
            <div cl>
              {person?.map((person, index) => (
                <a key={index} href={`/details/${id}`}>
                  <div  className="relative flex items-center space-x-3 rounded-lg   py-5 shadow-sm  hover:border-gray-400 cursor-pointer">
                    <div  className="flex-shrink-0">
                      <img
                        alt=""
                        src={person.imageSrc}
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1 overflow-auto">
                      <span aria-hidden="true" className="absolute inset-0" />
                      <div className="flex justify-between">
                        <p className="text-lg font-medium text-gray-900">
                          {person?.company}
                        </p>
                        <p className="text-[15px] text-gray-400">
                          {person?.date}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <div className="truncate text-sm text-gray-500 flex gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="#02FFD0"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                          </svg>
                          <div className="flex gap-2">
                            {" "}
                            <p className="font-bold text-black">
                              {person?.name}
                            </p>
                            <p> {person?.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* person details */}
        <div className="sm:flex hidden flex-col lg:border-r-2 p-4 px-10 sm:col-span-7 col-span-5  lg:col-span-5 gap-5 ">
          <div className="flex justify-between gap-2 font-semibold ">
            <div className="flex justify-between gap-1">
              {" "}
              <h1> Joe </h1>
              <h1> {moment().format("DD MMM YYYY")}</h1>
            </div>
            <div className="cursor-pointer">
              {/* filters-icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </div>
          {isOpen && (
            <div className="conversation  flex">
              <div className="mt-3 py-4 w-full  message sent ">
                {/*close */}
                <div
                  onClick={() => setIsOpen(false)}
                  className="absolute top-1 right-1 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  {/* divin en alt sag kosesine 10.45 yazicam */}
                </div>
                <p className="absolute bottom-1 right-2 text-xs">10.45</p>

                <p className="p-4 text-[13px]">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, animi quis numquam soluta nobis explicabo!
                  Laboriosam dolorum culpa aliquid ducimu
                </p>
              </div>
            </div>
          )}

          <div className="border border-gray-300 h-[70vh]">
            {/* chat */}
            <div className="relative flex items-center space-x-3  border-b mx-7 py-3 mt-7 cursor-pointer hover:border-gray-400">
              <div className="flex-shrink-0">
                <img
                  alt=""
                  src={"/mattia.jpg"}
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span aria-hidden="true" className="absolute inset-0" />
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-gray-900">
                    Salesflare
                  </p>
                  <p className="text-[15px] text-gray-400 px-2">12.05.2023</p>
                </div>
                <div>
                  {" "}
                  <div className="truncate text-sm text-gray-500 flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#02FFD0"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <div className="flex gap-2">
                      {" "}
                      <p className="font-bold text-black">Mattia</p>
                      <p> Hi bro </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center space-x-3  border-b mx-7 py-3 mt-7 focus-within:ring-2 cursor-pointer hover:border-gray-400">
              <div className="flex-shrink-0">
                <img
                  alt=""
                  src={"/person1.jpeg"}
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span aria-hidden="true" className="absolute inset-0" />
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-gray-900">
                    Funnel Consulting
                  </p>
                  <p className="text-[15px] text-gray-400 px-2">12.05.2023</p>
                </div>
                <div>
                  {" "}
                  <div className="truncate text-sm text-gray-500 flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#02FFD0"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <div className="flex gap-2">
                      {" "}
                      <p className="font-bold text-black">Oktay</p>
                      <p> hi </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 w-full px-7 py-2 flex justify-between ">
            <div className="flex">
              <div className="bg-[#02FFD0] border-2 border-gray-300 flex justify-center items-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet. Ullam, velit.
              </p>
            </div>

            <div className="flex justify-end ml-10">
              <div className="avatar-group  ">
                <div className="avatar">
                  <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" />
                </div>

                <div className="avatar">
                  <img src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/768/2018/08/glasses-american-man-20s-hipster.jpg" />
                </div>
                <div className="hidden-avatars">+3</div>
              </div>
            </div>
          </div>
        </div>
        {/* account information */}
        <div className="col-span-2 bg-gray-50 pr-8 lg:flex lg:flex-col hidden">
          <div className="flex flex-col col-span-1 px-5 border-b-2 py-4">
            <div className="xl:flex xl:justify-between grid justify-center gap-2 w-full items-center ">
              <div className="flex gap-2">
                <div className="flex flex-col">
                  {" "}
                  <h1 className="text-lg font-bold">Account</h1>
                  <h3 className="text-xs">SalesPark</h3>{" "}
                </div>
                <img
                  alt=""
                  src={"/person1.jpeg"}
                  className="h-12 w-12 rounded-full  border-2 col-span-1 cursor-pointer"
                />
              </div>

              <div className="avatar-group2  mx-2 lg:flex justify-end">
                <div className="avatar2">
                  <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" />
                </div>

                <div className="avatar2">
                  <img src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/768/2018/08/glasses-american-man-20s-hipster.jpg" />
                </div>
                <div className="hidden-avatars2">+3</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-1 px-5 border-b-2 py-4">
            <h1 className="text-lg">Informazioni account</h1>
            <a href="www.salespark.com">
              <div className="flex gap-2 mt-2 cursor-pointer">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#02FFD1"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p>www.salespark.com</p>
              </div>
            </a>
            <a href="/team/users">
              {" "}
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#02FFD1"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <p>60 utenti attivi</p>
              </div>
            </a>

            <div className="flex justify-end gap-1 mt-5">
              {" "}
              <button className="bg-[#02FFD1] border-2 px-5 text-xs py-1">
                Edit
              </button>
              <button className="bg-white border-2 px-3 text-xs py-1">
                Show more
              </button>
            </div>
          </div>
          <div className="flex flex-col col-span-1  border-b-2 pt-4">
            <h1 className="text-xl font-semibold px-5">Oppurtantia</h1>
            <div className="bg-[#02FFD1] w-full flex py-5 border-2 border-gray-300 items-center justify-between mt-3">
              <div className="bg-black px-[6px] py-6 rounded-r-md"></div>
              <p className="mx-3 text-">Lorem ipsum dolor </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-[#02FFD1] border-2 px-5 text-xs py-1">
                Creat
              </button>
            </div>

            <h1 className="text-xl font-semibold px-5 mt-5">Nessun contatto</h1>
            <p className="px-5 text-xs mb-9">
              Nessun contatto suggerito trovato
            </p>

            <div className="px-5 flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                {" "}
                <h1 className="font-bold text-lg">Contatti</h1>
                {/* search-icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                {/* filters-icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>
              <div className="bg-[#02FFD1] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-3 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-auto h-[30vh]">
            <a href="/detils-page">
              {" "}
              <div className="relative flex items-center space-x-3  border-b mx-7 py-3 cursor-pointer hover:border-gray-400">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    src={"/person1.jpeg"}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-xs font-medium text-gray-900 text-nowrap">
                      Matteo Mirabella
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#02FFD0"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            <a href="/detils-page">
              {" "}
              <div className="relative flex items-center space-x-3  border-b mx-7 py-3 cursor-pointer hover:border-gray-400">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    src={"/person1.jpeg"}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-xs font-medium text-gray-900 text-nowrap">
                      Matteo Mirabella
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#02FFD0"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a href="/detils-page">
              {" "}
              <div className="relative flex items-center space-x-3  border-b mx-7 py-3 cursor-pointer hover:border-gray-400">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    src={"/person1.jpeg"}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-xs font-medium text-gray-900 text-nowrap">
                      Matteo Mirabella
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#02FFD0"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a href="/detils-page">
              {" "}
              <div className="relative flex items-center space-x-3  border-b mx-7 py-3 cursor-pointer hover:border-gray-400">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    src={"/person1.jpeg"}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-xs font-medium text-gray-900 text-nowrap">
                      Matteo Mirabella
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#02FFD0"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a href="/detils-page">
              {" "}
              <div className="relative flex items-center space-x-3  border-b mx-7 py-3 cursor-pointer hover:border-gray-400">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    src={"/person1.jpeg"}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-xs font-medium text-gray-900 text-nowrap">
                      Matteo Mirabella
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#02FFD0"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div clasName="col-span-2 w-full">
<div className="px-7 w-full">

<div className="flex justify-between gap-2 w-full">
    <div className="flex flex-col col-span-1">
      <h1 className="text-lg font-bold">Account</h1>
      <h3 className="text-xs">SalesPark</h3>
    </div>

    <img
      alt=""
      src={"/person1.jpeg"}
      className="h-12 w-12 rounded-full  border-2 col-span-1"
    />

    <div className="cols-span-1">   
    <div className="avatar-group2  ">
      <div className="avatar2">
        <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" />
      </div>

      

      <div className="avatar2">
        <img src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/768/2018/08/glasses-american-man-20s-hipster.jpg" />
      </div>
      <div className="hidden-avatars2">+3</div>
    </div></div>
 
  </div>
</div>

</div> */
}
