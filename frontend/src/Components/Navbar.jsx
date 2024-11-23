import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Navbar() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };
  const handleDonationClick = () => {
    navigate("/DonationList"); // Navigate to the login page
  };
  const handleDonateClick = () => {
    navigate("/DonationListing"); // Navigate to the LandingPage page
  };
  const handleBackhome = () => {
    navigate("/Donation"); // Navigate to the LandingPage page
  };

  return (
    <div className="flex bg-black py-5 items-center shadow-lg justify-center fixed top-0 w-full z-50">
      <div className="w-[60%] flex justify-between">
        <div className="flex items-center cursor-pointer gap-1">
          <h1 className="text-2xl text-white" onClick={handleBackhome}>
            Remade
          </h1>
        </div>
        <div className="flex">
          <ul className="flex items-center w-full space-x-6 lg:space-x-12">
            <li
              className="text-lg text-white cursor-pointer"
              onClick={handleDonationClick}
            >
              Item List
            </li>
            <li
              className="text-lg text-white cursor-pointer"
              onClick={handleDonateClick}
            >
              Donate
            </li>
            <li
              className="text-lg text-white cursor-pointer"
              onClick={handleLoginClick}
            >
              Login
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
