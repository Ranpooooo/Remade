import React, { useState } from "react";
import NavbarLoginIn from "../Components/NavbarLogIn";

const DonationItemListing = () => {
  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      itemName,
      itemDescription,
      image,
    });
  };

  return (
    <>
      <NavbarLoginIn />
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        {/* Left Section: Image Upload */}
        <div className="w-1/3 p-4 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-center">Upload Image</h3>
          <div className="w-full h-80 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded Preview"
                className="object-cover rounded-lg w-full h-full"
              />
            ) : (
              <label
                htmlFor="file-upload"
                className="w-full h-full flex flex-col items-center justify-center text-gray-300 cursor-pointer"
              >
                <p>Click to upload an image</p>
                <p className="text-sm text-gray-500">Max size: 10MB</p>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  required
                />
              </label>
            )}
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-2/3 ml-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">Donate Your Item</h3>
          <form onSubmit={handleSubmit}>
            {/* Item Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Item Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-white"
                placeholder="Enter item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </div>

            {/* Item Description Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Item Description</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-white"
                placeholder="Enter item description"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                required
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-500 rounded border-gray-600 bg-gray-700"
                required
              />
              <label htmlFor="agree" className="ml-2 text-sm text-gray-400">
                (Required) I have checked the donation notice and agree to donate.
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Register
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonationItemListing;