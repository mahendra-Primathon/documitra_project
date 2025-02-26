import React, { useState } from "react";

interface AddMemberFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveMember: (member: { name: string; age: number }) => void;
}

const AddMemberForm: React.FC<AddMemberFormProps> = ({
  isOpen,
  onClose,
  onSaveMember,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age) {
      onSaveMember({ name, age: Number(age) });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-secondary rounded-lg p-10 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 border border-gray-500  p-1 m-1 rounded-lg  text-gray-500 hover:text-gray-900"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-6 mx-auto  ">Add/Manage Member</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white px-14 py-8  ">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
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