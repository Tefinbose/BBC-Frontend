import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData,
      );

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("admin", JSON.stringify(response.data.user));

      alert("Registration Successful");

      navigate("/admin/login");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          p-8
          rounded-xl
          shadow-lg
          flex
          flex-col
          gap-5
          w-[90%]
          max-w-md
        "
      >
        <h1 className="text-4xl font-bold text-center">Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <button
          className="
            bg-black
            text-white
            p-3
            rounded
          "
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
