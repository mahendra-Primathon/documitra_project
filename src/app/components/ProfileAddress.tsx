// components/ProfileAddress.tsx
"use client";
import React, { useState } from 'react';
import { AddressData } from '../constants/userProfileData';

interface ProfileAddressProps {
  addressData: AddressData;
  onUpdate: (data: AddressData) => Promise<void>;
}

const ProfileAddress: React.FC<ProfileAddressProps> = ({ addressData, onUpdate }) => {
  const [formData, setFormData] = useState<AddressData>(addressData);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onUpdate(formData);
      setIsEditing(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-medium mb-6">Address</h2>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={handleSubmit}
              className="mt-4 px-4 bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              className="mt-4 px-4 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-700">{formData.street}</p>
          <p className="text-sm text-gray-700">{formData.city}, {formData.state} {formData.zipCode}</p>
          <p className="text-sm text-gray-700">{formData.country}</p>
          
          <button 
            onClick={() => setIsEditing(true)}
            className="mt-4  rounded-full px-6 bg-primary text-white py-2  hover:bg-blue-700 transition-all duration-200"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileAddress;