import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-5 sticy top-0">
      <h1 className="text-4xl">Chefaos</h1>
      <div className="space-x-8 font-semibold">
        <Link>Home</Link>
        <Link>Our Chefs</Link>
        <Link>Blog</Link>
        <Link>Chef Register</Link>
      </div>
      <div className="space-x-3 font-bold">
        <Link className="bg-slate-300 px-10 py-2 rounded-full">Login</Link>
        <Link className="bg-yellow-400 px-8 py-2 rounded-full">
          Find A Chef
        </Link>
      </div>
    </nav>
  );
};

export default Header;
