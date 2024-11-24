import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={item.imageUrl || "https://via.placeholder.com/150"}
        alt={item.itemName}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{item.itemName}</h2>
      <p className="text-gray-600">{item.itemDescription}</p>
    </div>
  );
};

export default ItemCard;
