import React from "react";

function Footer() {
  return (
    <div className="flex bg-gray-900 w-full border-t-[1px]">
      <div className="flex flex-col md:flex-row w-full lg:w-1/2 mx-auto justify-around m-5 items-center">
        {/* Navigation Links */}
        <div>
          <ul className="flex flex-col gap-5 items-center md:items-start">
            <li className="text-white cursor-pointer text-sm">Feedback</li>
            <li className="text-white cursor-pointer text-sm">About Us</li>
            <li className="text-white cursor-pointer text-sm">
              Terms & Conditions
            </li>
            <li className="text-white cursor-pointer text-sm">
              Privacy Policy
            </li>
            <li className="text-white cursor-pointer text-sm">
              Support us
            </li>
          </ul>
          <p className="mt-2 text-sm text-center">
            @2024 Remade. All rights reserved.
          </p>
        </div>

        {/* Email Section */}
        <div className="h-full">
          <p className="underline text-medium flex items-center gap-2">
            <a
              href="mailto:Remade@gmail.com"
              className="text-sm text-white"
            >
              Remade@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
