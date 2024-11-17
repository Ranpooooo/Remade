import React from "react";
import Navbar from "../../Components/Navbar";
import deb from "../images/deblured-cutty-fox.jpg";
const DonationLandingPage = () => {
  //Buttons
  const buttons = [
    { label: "Search", icon: "🔍" },
    { label: "Item List", icon: "⚖️" },
    { label: "ChatAI", icon: "🤖" },
    { label: "Analytic", icon: "📊" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />
      <div className="relative">
        {/* Background Image */}
        <div
          className="w-full h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${deb})`,
          }}
        ></div>

        {/* Buttons Section */}
        <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4 max-w-xl mx-auto">
            {buttons.map((button, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-center h-24 bg-gray-700 text-white text-center rounded-md shadow-md hover:bg-gray-600 transition duration-200"
              >
                <span className="text-3xl">{button.icon}</span>
                <span className="mt-2 text-sm">{button.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Items */}
      <div className="px-8 py-20">
        <h2 className="text-2xl font-bold text-center mb-6">Popular Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Household area */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Household</h3>
            <ul className="space-y-2">
              {[
                "Toublek's Shattering Quarterstaff",
                "Karnix's Netherbow",
                "Toublek's Deathmark Longbow",
                "Lequirus's Coveted Tome",
                "Staff of the Umbramancer",
              ].map((house, index) => (
                <li
                  key={index}
                  className="bg-gray-700 rounded p-3 hover:bg-gray-600"
                >
                  {house}
                </li>
              ))}
            </ul>
          </div>

          {/* Clothes */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Clothes</h3>
            <ul className="space-y-2">
              {[
                "Swirling Essence Shoes",
                "Shadow Harvester Grips",
                "Phantom Wolf Tunic",
                "Ancient Tapestry Mantle",
                "Shadow Harvester Mask",
              ].map((cloth, index) => (
                <li
                  key={index}
                  className="bg-gray-700 rounded p-3 hover:bg-gray-600"
                >
                  {cloth}
                </li>
              ))}
            </ul>
          </div>

          {/* Decoration */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Decorations</h3>
            <ul className="space-y-2">
              {[
                "Bracers of the Primal King",
                "Belt of Bloodlust",
                "Clasp of the Conqueror",
                "Ancient Saurodoma Bracers",
                "Band of Universal Power",
              ].map((decorate, index) => (
                <li
                  key={index}
                  className="bg-gray-700 rounded p-3 hover:bg-gray-600"
                >
                  {decorate}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationLandingPage;
