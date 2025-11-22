import React from "react";
import { Camera, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function MyProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F6F9] pb-10">
      {/* Header with Back Button */}
      <div className="pt-10 pb-6 relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute left-4 top-12 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" /> Back
        </button>
        <h1 className="text-3xl font-bold text-center py-6">My Profile</h1>
      </div>

      {/* Profile Container */}
      <div className="mx-6 bg-[#F7F6F9] shadow-sm border border-[#82828233]">

        {/* Username */}
        <div className="flex justify-between px-6 py-10 border-b border-[#828282CC]">
          <p className="text-gray-700">Username</p>
          <p className="text-gray-900 font-medium">Adabekee5</p>
        </div>

        {/* Display Photo */}
        <div className="flex justify-between items-center px-6 py-10 border-b border-[#828282CC]">
          <p className="text-gray-700">Display photo</p>

          <div className="relative">
            <img
              src="/avatar.jpg"
              className="w-12 h-12 rounded-full object-cover"
              alt="User"
            />
            <button className="absolute -bottom-1 -right-1 bg-[#401A6D] text-white p-1 rounded-full">
              <Camera size={14} />
            </button>
          </div>
        </div>

        {/* Name */}
        <div className="flex justify-between px-6 py-10 border-b border-[#828282CC]">
          <p className="text-gray-700">Name</p>
          <p className="text-gray-900 font-medium">Ada Okolie</p>
        </div>

        {/* Email */}
        <div className="flex justify-between px-6 py-10 border-b border-[#828282CC]">
          <p className="text-gray-700">Email</p>
          <p className="text-gray-900 font-medium">
            adaokolie@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="flex justify-between px-6 py-10 border-b border-[#828282CC]">
          <p className="text-gray-700">Phone number</p>
          <p className="text-gray-900 font-medium">09035041950</p>
        </div>

        {/* Edit Button */}
        <div className="flex justify-center py-10">
          <button className="bg-[#401A6D] hover:bg-purple-900 text-white px-12 py-3 rounded-full">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}