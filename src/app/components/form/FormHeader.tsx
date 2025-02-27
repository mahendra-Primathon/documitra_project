"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { VISA_FORM_CONSTANTS } from "../../constants/formsData";
import AddMemberForm from "../popUp/AddMemberForm";
import ManageMembers from "../popUp/ManageMember";
import addImage from "../../../../public/assets/images/Form/AddIcon.svg";

interface VisaFormHeaderProps {
  applicantName?: string;
  onSaveAndExit?: () => void;
  onAddMember?: () => void;
}

const FormHeader = ({
  applicantName = "Rajev",
  onSaveAndExit,
  onAddMember,
}: VisaFormHeaderProps) => {
  const router = useRouter();
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isManageMembersOpen, setIsManageMembersOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleSaveAndExit = () => {
    if (onSaveAndExit) onSaveAndExit();
    router.push(VISA_FORM_CONSTANTS.routes.HOME);
  };

  const handleAddMember = (member: { name: string; age: number }) => {
    setMembers((prev) => [...prev, member]);
  };

  const handleRemoveMember = (index: number) => {
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSelectMember = (name: string) => {
    setSelectedMember(name);
  };

  const handleDeselectMember = () => {
    setSelectedMember(null);
  };

  return (
    <div className="relative w-full h-48">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/Form/Mask_group.svg"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-4">
          <div className="flex items-center space-x-2 text-sm text-white/90">
            {VISA_FORM_CONSTANTS.breadcrumbs.map((item, index) => (
              <div key={item.path} className="flex items-center">
                {index > 0 && <span className="mx-2 text-white/70">/</span>}
                <Link
                  href={item.path}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </nav>

        <div className="pt-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              {VISA_FORM_CONSTANTS.usa.title}
            </h1>
            <p className="text-white/90">{VISA_FORM_CONSTANTS.usa.subtitle}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              <div className="flex items-center gap-2 ">
                <div
                  className={`px-10 py-3 rounded-md ${
                    selectedMember && selectedMember.length > 0
                      ? "opacity-[30%]"
                      : "bg-secondary text-black "
                  }`}
                >
                  <span className=" font-medium  ">{applicantName}</span>
                </div>

                {selectedMember && (
                  <div className="bg-secondary px-6  flex flex-row justify-between py-3 rounded-md">
                    <span className="text-black font-medium">
                      {selectedMember}
                    </span>
                    <button
                      onClick={handleDeselectMember}
                      className="ml-2 text-black  hover:bg-black/10 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                )}

                <button
                  onClick={() => setIsManageMembersOpen(true)}
                  className="ml-4 text-white hover:text-white/90 flex items-center space-x-2 gap-2 transition-colors"
                >
                  <span> Add / Manage Members</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleSaveAndExit}
              className="px-8 py-3 bg-secondary text-blue-700 rounded-md hover:bg-white/90 transition-colors duration-200 flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
              <span>Save & Exit</span>
            </button>
          </div>
        </div>
      </div>
      <AddMemberForm
        isOpen={isAddMemberOpen}
        onClose={() => setIsAddMemberOpen(false)}
        onSaveMember={handleAddMember}
        onOpenManageMembers={() => setIsManageMembersOpen(true)}
      />
      <ManageMembers
        onSelect={handleSelectMember}
        onRemove={handleRemoveMember}
        isOpen={isManageMembersOpen}
        onClose={() => setIsManageMembersOpen(false)}
        onAddNewMember={() => setIsAddMemberOpen(true)}
      />
    </div>
  );
};

export default FormHeader;
