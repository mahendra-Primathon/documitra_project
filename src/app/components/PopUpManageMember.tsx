"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import addIconPerson from "@/../public/assets/images/Form/AddIcon.svg";
import ConfirmDeletePopup from "./PopUpConfirmDeletePopup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

interface ManageMemberProps {
  onSelect: (name: string) => void;
  onRemove: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
  onAddNewMember: () => void;
}

interface Member {
  _id: string;
  name: string;
  age: number;
  created: string;
  isAdult: boolean;
}

const ManageMember: React.FC<ManageMemberProps> = ({
  onSelect,
  isOpen,
  onClose,
  onAddNewMember,
}) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/members");
        if (!response.ok) {
          throw new Error(`Failed to fetch members`);
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) fetchMembers();
  }, [isOpen]);

  const handleRemoveMember = async (id: string, index: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/members/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`Failed to remove member`);
      setMembers((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error removing member:", error);
    }
  };

  const handleRemoveClick = (id: string, index: number) => {
    setSelectedMemberId(id);
    setSelectedIndex(index);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedMemberId !== null && selectedIndex !== null) {
      handleRemoveMember(selectedMemberId, selectedIndex);
      setIsConfirmOpen(false);
    }
  };

  const handleSelectMember = (name: string) => {
    toast.success(`${name} is selected`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      // style: {
      //   backgroundColor: "#10B981", // Tailwind `bg-green-500`
      //   color: "#ffffff", // Tailwind `text-white`
      // },
    });
    onSelect(name);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0">
      <div className="bg-secondary rounded-lg p-6 sm:p-10 max-w-lg sm:max-w-2xl w-full mx-2 sm:mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 text-lg sm:text-xl"
        >
          ✕
        </button>

        <div className="flex flex-row items-center justify-center space-x-2">
          <div className="bg-primary rounded-full p-2 sm:p-3 flex items-center">
            <Image
              src={addIconPerson}
              alt="logo"
              width={30}
              height={30}
              className="w-6 sm:w-8 md:w-10 lg:w-auto h-auto"
            />
          </div>
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold mb-4 sm:mb-6 pt-3 sm:pt-5">
              Add/Manage Member
            </h2>
          </div>
        </div>

        <div className="px-3 sm:px-4 pb-4 sm:pb-6 bg-white rounded-xl max-h-[55vh] overflow-y-auto">
          {loading ? (
            <p className="text-center py-3 sm:py-4 text-sm sm:text-base">
              Loading members...
            </p>
          ) : members.length === 0 ? (
            <p className="text-center py-3 sm:py-4 text-sm sm:text-base">
              No members found.
            </p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {members.map((member, index) => (
                <li
                  key={member._id}
                  className="py-3 sm:py-4 flex items-center justify-between text-sm sm:text-base"
                >
                  <div className="flex items-center">
                    <p className="pr-3 sm:pr-6">{index + 1}.</p>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="#ffffff"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">{member.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {member.age >= 18 ? "Adult | " : "Child | "} Created on{" "}
                        {new Date(member.created).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-1 sm:space-y-0">
                    {index >= 1 && (
                      <button
                        onClick={() => handleSelectMember(member.name)}
                        className="w-full sm:w-auto px-2 sm:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium bg-primary text-white cursor-pointer "
                      >
                        Select
                      </button>
                    )}
                    <button
                      onClick={() =>
                        index === 0
                          ? console.log("Cannot remove the primary member")
                          : handleRemoveClick(member._id, index)
                      }
                      className={`w-full sm:w-auto px-2 sm:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium ${
                        index === 0
                          ? "text-white text-sm"
                          : "bg-gray-500 text-white"
                      }`}
                    >
                      {index === 0 ? "" : "Remove"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={() => {
            onClose();
            onAddNewMember();
          }}
          className="w-full py-2 sm:py-3 my-1 bg-primary text-white rounded-md font-medium flex items-center justify-center text-sm sm:text-base"
        >
          <span className="mr-1 sm:mr-2">+</span> Add New Member
        </button>
      </div>

      {isConfirmOpen && (
        <ConfirmDeletePopup
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ManageMember;
