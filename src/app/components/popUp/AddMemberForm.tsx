// ./src/app/components/popUp/AddMemberForm.tsx
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
  // const [isManageMembersOpen, setIsManageMembersOpen] = useState(false);

  // onSaveMember({ name, age: Number(age) });
  // onClose();
  // onOpenManageMembers(); // Open Manage Members
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted"); // Log when the form is submitted
    if (name && age) {
      console.log("Name and age are valid:", { name, age }); // Log name and age values
      try {
        console.log("Sending request to: http://localhost:5000/api/members"); // Log the API endpoint
        const response = await fetch("http://localhost:5000/api/members", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, age }),
        });
        console.log("Response received:", response); // Log the entire response object
        if (response.ok) {
          console.log("Member saved successfully"); // Log success message
          onClose();
          onOpenManageMembers();
        } else {
          console.error("Failed to save member:", response.status, response.statusText); // Log error status
          const errorData = await response.json();
          console.error("Error details:", errorData); // Log error details from the response
        }
      } catch (error) {
        console.error("Error saving member:", error); // Log any errors during the fetch
      }
    } else {
      console.warn("Name and age are required"); // Log a warning if name or age is missing
    }
  };

  if (!isOpen) {
    console.log("AddMemberForm is not open, returning null"); // Log when the form is not open
    return null;
  }

  console.log("AddMemberForm is open, rendering form"); // Log when the form is open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-secondary rounded-lg p-10 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 border border-gray-500  p-1 m-1 rounded-lg  text-gray-500 hover:text-gray-900"
        >
          ✕
        </button>

        <div className="flex flex-row items-center justify-center space-x-2 ">
          <div className=" bg-primary rounded-full p-2 flex items-center ">
            <Image src={AddIcon} width={20} height={20} alt="logo" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-6  pt-5  ">
              Add/Manage Member
            </h2>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white px-14 pt-8 pb-12  "
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
            // onClick={() => setIsManageMembersOpen(true)}
          >
            Save Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMemberForm;
