import React from "react";
import OpportunityItem from "../components/OpportunityItem/OpportunityItem";

export default function Page() {
  const [lists, setLists] = React.useState([
    {
      items: [
        {
          id: 2,
          title: "Lead",
          value: 0,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          total: "0",
          price: "10000 €",
          topHeaderColor: "#08FDCD",
          headerColor: "#CBFFF6",
        },
        {
          id: 3,
          title: "Lead",
          value: 0,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: " Park",
          total: "0",
          price: "10000 €",
          topHeaderColor: "#08FDCD",
          headerColor: "#CBFFF6",
        },
      ],
      columnId: 1,
      topHeaderColor: "#08FDCD",
      headerColor: "#CBFFF6",
      title: "Lead",
      value: 0,
      currency: "$",
      total: "0",
    },
    {
      items: [
        {
          id: 5,
          title: "Contatte",
          value: 2,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#F9F317",
          headerColor: "#FFFDCC",
        },
        {
          id: 6,
          title: "Contatte",
          value: 2,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#F9F317",
          headerColor: "#FFFDCC",
        },
      ],
      columnId: 4,
      topHeaderColor: "#F9F317",
      headerColor: "#FFFDCC",
      title: "Contatte",
      value: 2,
      currency: "$",
      total: "0",
    },
    {
      items: [
        {
          id: 8,
          title: "Qualificate",
          value: 4,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#FE45C8",
          headerColor: "#FFDAF2",
        },
        {
          id: 9,
          title: "Qualificate",
          value: 4,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#FE45C8",
          headerColor: "#FFDAF2",
        },
      ],
      id: 3,
      title: "Qualificate",
      value: 4,
      currency: "$",
      description: "Lorem ipsum",
      image: "/person1.jpeg",
      name: "Sales Park",
      price: "10000 €",
      total: "0",
      topHeaderColor: "#FE45C8",
      headerColor: "#FFDAF2",
    },
    {
      items: [
        {
          id: 11,
          title: "Prospetti",
          value: 12,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#FB8C03",
          headerColor: "#FEE8CD",
        },
        {
          id: 12,
          title: "Prospetti",
          value: 12,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#FB8C03",
          headerColor: "#FEE8CD",
        },
      ],
      id: 4,
      title: "Prospetti",
      value: 12,
      currency: "$",
      description: "Lorem ipsum",
      image: "/person1.jpeg",
      name: "Sales Park",
      price: "10000 €",
      total: "0",
      topHeaderColor: "#FB8C03",
      headerColor: "#FEE8CD",
    },
    {
      items: [
        {
          id: 14,
          title: "Approvate",
          value: 1,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#0029FF",
          headerColor: "#D9E0FF",
        },
        {
          id: 15,
          title: "Approvate",
          value: 1,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#0029FF",
          headerColor: "#D9E0FF",
        },
      ],
      id: 5,
      title: "Approvate",
      value: 1,
      currency: "$",
      description: "Lorem ipsum",
      image: "/person1.jpeg",
      name: "Sales Park",
      price: "10000 €",
      total: "0",
      topHeaderColor: "#0029FF",
      headerColor: "#D9E0FF",
    },
    {
      items: [
        {
          id: 17,
          title: "Perse",
          value: 0,
          currency: "$",
          description: "Lorem ipsum",
          image: "/person1.jpeg",
          name: "Sales Park",
          price: "10000 €",
          total: "0",
          topHeaderColor: "#FC2A08",
          headerColor: "#FFD3CE",
        },
      ],
      id: 6,
      title: "Perse",
      value: 1,
      currency: "$",
      description: "Lorem ipsum",
      image: "/person1.jpeg",
      name: "Sales Park",
      price: "10000 €",
      total: "0",
      topHeaderColor: "#FC2A08",
      headerColor: "#FFD3CE",
    },
  ]);

  return (
    <section>
      {/* Header */}
      <div className="flex gap-10 p-5">
        <h1>1 Opportunita filtrata</h1>
        <div className="flex gap-1">
          <h1>Lead totali </h1>
          <h2 className="font-bold">19</h2>
        </div>
      </div>
      {/* Content */}
      <div className="grid grid-cols-6">
        {lists?.map((columns, columnIndex) => (
          <OpportunityItem
            key={columnIndex}
            list={columns}
            setList={(newList) => {
              setLists((prev) =>
                prev.map((item, index) =>
                  index === columnIndex ? { ...item, items: newList } : item
                )
              );
            }}
          />
        ))}
      </div>
    </section>
  );
}
