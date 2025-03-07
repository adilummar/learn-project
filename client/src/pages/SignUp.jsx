import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center mt-7">Sign Up</h1>
      <form className="mt-5 mx-auto max-w-lg flex flex-col gap-4 ">
        <input
          type="text"
          className="p-3 bg-white border-gray rounded-lg w-full"
          id="username"
          placeholder="username"
        />
        <input
          type="email"
          className="p-3 bg-white border-gray rounded-lg w-full"
          id="email"
          placeholder="Email"
        />
        <input
          type="password"
          className="p-3 bg-white border-gray rounded-lg w-full"
          id="password"
          placeholder="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          sign up
        </button>
      </form>
      <p className="flex gap-2 mt-4">
        have an account{" "}
        <Link to={'/sign-in'}>
          <span className="text-blue-800">sign in</span>
        </Link>
      </p>
    </div>
  );
}
