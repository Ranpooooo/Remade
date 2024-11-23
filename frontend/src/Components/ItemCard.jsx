import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-gray-600 text-sm text-center">{item.description}</p>
      <p className="text-gray-400 text-sm mt-2">Posted on: {item.postOn}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
};

export default ItemCard;
