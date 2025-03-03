"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddIcon from "../../../../public/assets/images/Form/AddIcon.svg";

interface AddMemberFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveMember: (member: { name: string; age: number }) => void;
  onOpenManageMembers: () => void; // New prop to open Manage Members
}

const AddMemberForm: React.FC<AddMemberFormProps> = ({
  isOpen,
  onClose,
  onSaveMember,
  onOpenManageMembers,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age) {
      try {
        console.log("Sending request to: http://localhost:5000/api/members");
        const response = await fetch("http://localhost:5000/api/members", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, age }),
        });
        if (response.ok) {
          console.log("Member saved successfully");
          setName("");
          setAge("");
          onClose();
          onOpenManageMembers();
        } else {
          console.error(
            "Failed to save member:",
            response.status,
            response.statusText
          );
          const errorData = await response.json();
          console.error("Error details:", errorData);
        }
      } catch (error) {
        console.error("Error saving member:", error);
      }
    } else {
      console.warn("Name and age are required");
    }
  };

  if (!isOpen) {
    console.log("AddMemberForm is not open, returning null");
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-secondary rounded-lg p-6 md:p-10 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 border border-gray-500 p-1 m-1 rounded-lg text-gray-500 hover:text-gray-900"
        >
          ✕
        </button>

        <div className="flex flex-row items-center justify-center space-x-2">
          <div className="bg-primary rounded-full p-2 flex items-center">
            <Image src={AddIcon} width={20} height={20} alt="logo" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 pt-5">
              Add/Manage Member
            </h2>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white px-6 md:px-14 pt-6 md:pt-8 pb-8 md:pb-12"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) =>
                setAge(e.target.value ? Number(e.target.value) : "")
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter age"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-full hover:bg-blue-800 transition-colors"
          >
            Save Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMemberForm;