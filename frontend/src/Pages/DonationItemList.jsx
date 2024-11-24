import React, { useState, useEffect } from "react";
import mockDataDonate from "../mockdata/mockDataDonate";
import ItemCard from "../Components/ItemCard";
import NavbarLoginIn from "../Components/NavbarLogIn";

const DonationItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...mockDataDonate]); // Trigger re-render when mockDataDonate updates
  }, [mockDataDonate]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-full">
        <NavbarLoginIn />
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Donation</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationItemList;
