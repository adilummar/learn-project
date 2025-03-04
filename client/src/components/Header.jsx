import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-sm">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link to={"/"}>
          <h1 className="font-bold text-wrap text-sm sm:text-xl">
            <span className="text-slate-500">Adil's</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            name=""
            id=""
            className="focus:outline-none"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to={"/signin"}>
            <li className="hidden sm:inline hover:underline">Signin</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
