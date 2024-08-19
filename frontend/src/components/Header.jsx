import React from "react";

const Header = () => (
  <header className="bg-black text-white p-4 flex justify-between items-center">
    <div className="text-xl">Abstract | Help Center</div>
    <button className="bg-white text-black px-4 py-2 rounded">
      Submit a request
    </button>
  </header>
);

export default Header;
