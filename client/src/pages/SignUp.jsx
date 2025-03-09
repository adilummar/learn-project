import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formdata, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.id]: e.target.value,
    });
    console.log(formdata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center mt-7">Sign Up</h1>
      <form
        className="mt-5 mx-auto max-w-lg flex flex-col gap-4 "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-3 bg-white border-gray rounded-lg w-full"
          id="username"
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="email"
          className="p-3 bg-white border-gray rounded-lg w-full"
          id="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          className="p-3 bg-white border-gray rounded-lg w-full"
          id="password"
          onChange={handleChange}
          placeholder="password"
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'loading...' : 'sign up' }
        </button>
      </form>
      <p className="flex gap-2 mt-4">
        have an account{" "}
        <Link to={"/sign-in"}>
          <span className="text-blue-800">sign in</span>
        </Link>
      </p>
      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
}
