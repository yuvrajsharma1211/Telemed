import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-green-300"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 ring-green-500"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 ring-green-500"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-6 focus:ring-2 ring-green-500"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full p-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
        >
          Sign Up
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link className="text-green-700 font-medium underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
