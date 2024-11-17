function Navbar() {
  return (
    <div className="flex bg-black py-5 items-center shadow-lg justify-center fixed top-0 w-full z-50">
      <div className="w-[60%] flex justify-between">
        <div className="flex items-center cursor-pointer gap-1">
         
          <h1 className="text-2xl text-white">Remade</h1>
        </div>
        <div className="flex">
          <ul className="flex items-center w-full space-x-6 lg:space-x-12">
            <li className="text-lg text-white cursor-pointer">Item List</li>
            <li className="text-lg text-white cursor-pointer">Donate</li>
            <li className="text-lg text-white cursor-pointer">Analytic</li>
            <li className="text-lg text-white cursor-pointer">Login </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
