"use client";
import React, { useState } from "react";
import { UserProfile } from "../constants/userProfileData";

interface ProfileGeneralProps {
  userData: UserProfile;
  onUpdate: (data: UserProfile) => Promise<void>;
}

const ProfileGeneral: React.FC<ProfileGeneralProps> = ({
  userData,
  onUpdate,
}) => {
  const [formData, setFormData] = useState<UserProfile>({
    fname: userData.fname,
    lname: userData.lname,
    email: userData.email, // Email remains non-editable
    phone: userData.phone,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await onUpdate(formData);
      setIsEditing(false); // Return to non-edit mode after successful update
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-medium mb-6">Account Details</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Name</p>
            {isEditing ? (
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <p className="font-medium">{formData.fname}</p>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Last Name</p>
            {isEditing ? (
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <p className="font-medium">{formData.lname}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Contact</p>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <p className="font-medium">{formData.phone}</p>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Email Address</p>
            <p className="font-medium">{formData.email}</p>
          </div>
        </div>

        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="mt-4 w-24 bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
          disabled={loading}
        >
          {loading ? "Saving..." : isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default ProfileGeneral;
