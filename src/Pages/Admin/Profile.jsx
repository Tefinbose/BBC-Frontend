import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("admin")) || {};
  console.log(admin);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Change Password
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/auth/change-password/${admin?._id}`,
        {
          newPassword: formData.newPassword,
        },
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("admin");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div
        className="
          max-w-xl
          mx-auto
          bg-white
          rounded-xl
          shadow-lg
          p-6
          md:p-8
        "
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="
              w-28
              h-28
              rounded-full
              border-4
              border-gray-200
            "
          />

          {/* Name */}
          <h1 className="text-3xl font-bold mt-4">{admin?.name || "Admin"}</h1>

          {/* Email */}
          <p className="text-gray-500 mt-1">{admin?.email}</p>
        </div>

        {/* Change Password Form */}
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Change Password</h2>

          {/* Current Password */}
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="
              border
              p-3
              rounded
              outline-none
              w-full
            "
          />

          {/* New Password */}
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="
              border
              p-3
              rounded
              outline-none
              w-full
            "
          />

          {/* Change Password Button */}
          <button
            type="submit"
            className="
              bg-black
              hover:bg-gray-800
              transition
              text-white
              p-3
              rounded
            "
          >
            Change Password
          </button>
        </form>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="
            bg-red-500
            hover:bg-red-600
            transition
            text-white
            p-3
            rounded
            w-full
            mt-5
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
