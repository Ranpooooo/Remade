import React from "react";

const DonationLandingPage = () => {
  const services = [
    {
      title: "DONATION",
      imgSrc:
        "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      hoverImgSrc:
        "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
    },
    {
      title: "BARTERING",
      imgSrc:
        "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      hoverImgSrc:
        "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#191c29]">
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold text-white mb-10">
          Choose your Service
        </h1>
        <div className="flex justify-center gap-8 max-w-screen-lg mx-auto">
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="relative flex flex-col items-center w-[calc(400px/1.2)] h-[400px] group"
            >
              {/* Card */}
              <div className="absolute inset-0 transition-all duration-500 group-hover:transform group-hover:perspective-[900px] group-hover:translate-y-[-5%] group-hover:rotate-x-[25deg] group-hover:translate-z-0 group-hover:shadow-lg">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-full object-cover transform scale-110 transition-transform duration-300 ease-in-out group-hover:scale-100"
                />
              </div>

              {/* Hover Image */}
              <img
                src={service.hoverImgSrc}
                alt={`${service.title} Hover`}
                className="absolute w-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-30%]"
              />

              {/* Title */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white opacity-0 bg-black bg-opacity-50 p-2 rounded-lg group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-opacity duration-300">
                {service.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationLandingPage;
