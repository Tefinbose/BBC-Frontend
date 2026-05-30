import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white w-[400px] p-10 rounded-2xl shadow-lg flex flex-col items-center">

        {/* Profile Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-gray-300"
        />

        {/* Admin Name */}
        <h1 className="text-4xl font-bold mt-6">
          Admin
        </h1>

        {/* Email */}
        <p className="text-gray-500 text-xl mt-2">
          admin@gmail.com
        </p>

        {/* Role */}
        <p className="bg-black text-white px-4 py-2 rounded-full mt-5">
          Administrator
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white w-full py-4 rounded-xl text-2xl mt-10"
        >

          Logout

        </button>

      </div>

    </div>
  );
}

export default Profile;