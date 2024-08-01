import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ReactSortable } from "react-sortablejs";

const sortableOptions = {
  animation: 150,
  swapThreshold: 0.65,
  group: "shared",
};

const OpportunityItem = ({ list, setList }) => {
  const [columns, setColumns] = React.useState(list?.items);

  function TotalPrice() {
    const total = columns.reduce((acc, item) => {
      return acc + parseInt(item.price);
    }, 0);
    return total;
  }
  React.useEffect(() => {
    setList(columns);
  }, [columns]);
  return (
    <div className="flex flex-col overflow-y-auto">
      <span
        style={{ backgroundColor: list?.topHeaderColor }}
        className=" w-full p-1"
      />
      <div
        style={{ backgroundColor: list?.headerColor }}
        className="bg-[#CBFFF6] px-4 py-2 flex justify-between"
      >
        <div>
          <h1>{list?.title}</h1>
          <p>
            {TotalPrice()} {list?.currency}
          </p>
        </div>
        <h1 className="font-bold text-4xl">{list?.value}</h1>
      </div>

      <div className="border-r-2 flex flex-col w-full h-[100vh] overflow-auto">
        <ReactSortable list={columns} setList={setColumns} {...sortableOptions}>
          {columns.map((item) => (
            <div
              key={item?.id}
              style={{ backgroundColor: item?.headerColor }}
              className="mx-2 pb-2 pt-1 mt-10"
            >
              <div className="bg-white grid grid-cols-3 py-3 px-2 border border-gray-600 m-1">
                <figure className="relative col-span-1">
                  <img
                    alt=""
                    src={item?.image}
                    className="h-12 w-12 rounded-full  border-2 col-span-1 cursor-pointer"
                  />
                  <figcaption className="w-7 h-7 rounded-full bg-[#08FDCD] absolute -top-2 right-4 text-center leading-7  text-sm">
                    MB
                  </figcaption>
                </figure>
                <div className="flex flex-col col-span-2 ">
                  <h1 className="font-medium">{item?.name}</h1>
                  <p className="text-lg font-bold">{item?.price}</p>
                  <p className="text-xs">{item?.description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center px-2 pt-1">
                <EllipsisHorizontalIcon
                  style={{ color: item?.topHeaderColor }}
                  class="h-8 w-8"
                />
                <button
                  style={{ backgroundColor: item?.topHeaderColor }}
                  className=" border-2 px-5 text-xs py-1 text-white"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </ReactSortable>
      </div>
    </div>
  );
};

export default OpportunityItem;
