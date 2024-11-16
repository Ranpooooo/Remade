import React from "react";

const Choose = () => {
  const services = [
    {
      title: "BLUE PROTOCOL",
      imgSrc:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      title: "THRONE AND LIBERTY",
      imgSrc:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      title: "CRIMSON DESERT",
      imgSrc:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      title: "DOKEV",
      imgSrc:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-10">
      {/* Title */}
      <h1 className="text-white text-center text-4xl font-bold mb-10">
        Choose your Services
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-full h-60 object-cover"
            />

            {/* Title Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-2xl font-bold mb-4">
                {service.title}
              </h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600">
                Visit Page
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
