import React from "react";

interface ManageMemberProps {
  members: { name: string; age: number }[];
  onRemoveMember: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const ManageMember: React.FC<ManageMemberProps> = ({
  members,
  onRemoveMember,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-6">Manage Members</h2>
        <ul className="space-y-4">
          {members.map((member, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{member.name} ({member.age} years old)</span>
              <button
                onClick={() => onRemoveMember(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageMember;