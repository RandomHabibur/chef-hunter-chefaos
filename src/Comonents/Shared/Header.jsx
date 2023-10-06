import React, { useEffect, useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/setting");
  };
  return (
    <nav className="flex justify-between items-center px-5 sticy top-0 py-5">
      <h1 className="text-4xl">Chefaos</h1>
      <div className="space-x-8 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/ourchefs">Our Chefs</Link>
        <Link to="blog">Blog</Link>
        <Link to="chefregister">Chef Register</Link>
        {/* https://www.youtube.com/watch?v=SLfhMt5OUPI */}
      </div>
      <div className="space-x-3 font-bold">
        <div className="flex items-center gap-5">
          {user ? (
            <div className="">
              <button onClick={handleNavigate} className="text-[22px]">
                Setting
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-slate-300 px-10 py-2 rounded-full">
              Login
            </Link>
          )}

          <Link className="bg-yellow-400 px-8 py-2 rounded-full">
            Find A Chef
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
