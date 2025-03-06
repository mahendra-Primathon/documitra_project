"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PersonIcon from "../../../../public/assets/images/Form/PersonIcon.svg";
import addIconPerson from "../../../../public/assets/images/Form//AddIcon.svg";


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
  onRemove,
  isOpen,
  onClose,
  onAddNewMember,
}) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/members");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch members: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchMembers();
    }
  }, [isOpen]);

  const handleRemoveMember = async (id: string, index: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/members/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(
          `Failed to remove member: ${response.status} ${response.statusText}`
        );
      }
      setMembers((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error removing member:", error);
    }
  };

  const handleSelectMember = (name: string) => {
    onSelect(name);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-secondary rounded-lg p-10 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="flex flex-row items-center justify-center space-x-2">
          <div className="bg-primary rounded-full p-3 flex items-center">
            <Image src={addIconPerson} alt="logo" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-6 pt-5">
              Add/Manage Member
            </h2>
          </div>
        </div>

        <div className="px-4 pb-6 bg-white rounded-xl">
          {loading ? (
            <p className="text-center py-4">Loading members...</p>
          ) : members.length === 0 ? (
            <p className="text-center py-4">No members found.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {members.map((member, index) => (
                <li
                  key={member._id}
                  className="py-4 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <p className="pr-6 text-sm">{index + 1}.</p>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="#ffffff"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">{member.name}</p>
                      <p className="text-sm text-gray-500">
                        {member.age >= 18 ? "Adult | " : "Child | "} Created on{" "}
                        {new Date(member.created).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSelectMember(member.name)}
                      className={`px-4 py-1.5 rounded text-sm font-medium ${
                        index === 0
                          ? "bg-white text-white"
                          : "bg-primary text-white cursor-pointer"
                      } `}
                    >
                      {index === 0 ? "" : "Select"}
                    </button>
                    <button
                      onClick={() =>
                        index === 0
                          ? console.log("Cannot remove the primary member")
                          : handleRemoveMember(member._id, index)
                      }
                      className={`px-4 py-1.5 rounded text-sm font-medium ${
                        index === 0
                          ? "bg-green-500 text-white"
                          : "bg-gray-500 text-white cursor-pointer"
                      }`}
                    >
                      {index === 0 ? "Main User" : "Remove"}
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
          className="w-full bottom-0 py-3 my-1 bg-primary text-white rounded-md font-medium flex items-center justify-center"
        >
          <span className="mr-2">+</span> Add New Member
        </button>
      </div>
    </div>
  );
};

export default ManageMember;
