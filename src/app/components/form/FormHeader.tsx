"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { VISA_FORM_CONSTANTS } from "../../constants/formsData";
import AddMemberForm from "../popUp/AddMemberForm";
import ManageMembers from "../popUp/ManageMember";
import { Menu, X } from "lucide-react";
import useClickOutside from "@/app/hooks/useClickOutside";
import { useRef } from "react";
import { useSearchParams } from "next/navigation";
import { packageCard } from "../../constants/packageData";
import AddIcon from "../../../../public/assets/images/Form/AddIcon.svg";

interface VisaFormHeaderProps {
  applicantName?: string;
  onSaveAndExit?: () => void;
  onAddMember?: () => void;
}

const FormHeader = ({
  applicantName = "Ramesh",
  onSaveAndExit,
  onAddMember,
}: VisaFormHeaderProps) => {
  const router = useRouter();
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isManageMembersOpen, setIsManageMembersOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<any>(null); // Adjust type as necessary
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  const handleSaveAndExit = () => {
    if (onSaveAndExit) onSaveAndExit();
    router.push(VISA_FORM_CONSTANTS.routes.HOME);
  };

  const handleSelectMember = (name: string) => {
    setSelectedMember(name);
  };

  const handleDeselectMember = () => {
    setSelectedMember(null);
  };

  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const packageId = searchParams.get("packageId");

  useEffect(() => {
    if (typeof window !== "undefined" && country && packageId) {
      const packages = packageCard[country];
      const pkg = packages.find((p) => p.id === parseInt(packageId));
      setSelectedPackage(pkg);
    }
  }, [country, packageId]);

  return (
    <div className="relative w-full h-52 sm:h-44">
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
        <nav className="py-3">
          <div className="flex flex-wrap items-center space-x-2 text-xs sm:text-sm text-white/90">
            {[
              ...VISA_FORM_CONSTANTS.breadcrumbs.slice(0, 2), // Take first two static items
              {
                label: country || VISA_FORM_CONSTANTS.breadcrumbs[2].label, // Use country param or fallback
                path: country
                  ? `/packages/${country.toUpperCase()}`
                  : VISA_FORM_CONSTANTS.breadcrumbs[2].path,
              },
            ].map((item, index, arr) => (
              <div key={item.path} className="flex items-center">
                {index > 0 && (
                  <span className="mx-1 sm:mx-2 text-white/70">/</span>
                )}
                {index === arr.length - 1 ? (
                  <span className="text-white">
                    {item.label.toUpperCase()}
                    </span>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="pt-2">
          <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
            {selectedPackage
              ? selectedPackage.title
              : VISA_FORM_CONSTANTS.usa.title}
          </h1>
          <p className="text-xs sm:text-sm text-white/90">
            {selectedPackage
              ? `Visa for - ${country}`
              : VISA_FORM_CONSTANTS.usa.subtitle}
          </p>
        </div>

        {/* Name Badge & Member Selection */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 translate-y-20 md:translate-y-11 ">
            <div className="px-3 py-2 bg-secondary text-black rounded-t-md text-xs sm:text-sm font-medium">
              {applicantName}
            </div>

            {selectedMember && (
              <div className="bg-secondary px-3 py-1 rounded-md flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-black font-medium">{selectedMember}</span>
                <button
                  onClick={handleDeselectMember}
                  className="text-black hover:bg-black/10 transition-colors p-1 rounded-md"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Add / Manage Members Button */}
            <button
              onClick={() => setIsManageMembersOpen(true)}
              className="hidden lg:flex text-xs sm:text-sm text-white hover:text-white/90 transition-colors ml-3  gap-1"
            >
              {/* <div className="rounded-full  flex items-center">
              </div> */}
              <Image src={AddIcon} width={25} height={25} alt="logo" />
              Add Members
            </button>
          </div>

          {/* Mobile Menu Button (Only for Mobile) */}
          <div className="sm:hidden absolute right-0  mr-2 translate-y-20  md:translate-y-11">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-9 h-7" />
              )}
            </button>
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-0 w-40 bg-secondary shadow-md rounded-md p-2 z-50"
              >
                <button
                  onClick={() => setIsManageMembersOpen(true)}
                  className="block w-full text-left px-2 py-1 text-xs sm:text-sm hover:bg-gray-100"
                >
                  Add / Manage Members
                </button>
                <button
                  onClick={handleSaveAndExit}
                  className="block w-full text-left px-2 py-1 text-xs sm:text-sm hover:bg-gray-100"
                >
                  Save & Exit
                </button>
              </div>
            )}
          </div>

          {/* Desktop Buttons (Only for Desktop) */}
          <div className="hidden sm:flex gap-2 items-center translate-y-14 md:translate-y-11">
            <button
              onClick={handleSaveAndExit}
              className="px-4 py-2 bg-secondary text-blue-700 rounded-md text-xs sm:text-sm hover:bg-white/90 transition-colors"
            >
              Save & Exit
            </button>
          </div>
        </div>
      </div>

      {/* Popups */}
      <AddMemberForm
        isOpen={isAddMemberOpen}
        onClose={() => setIsAddMemberOpen(false)}
        onSaveMember={() => {}}
        onOpenManageMembers={() => setIsManageMembersOpen(true)}
      />
      <ManageMembers
        isOpen={isManageMembersOpen}
        onClose={() => setIsManageMembersOpen(false)}
        onSelect={handleSelectMember}
        onRemove={() => {}}
        onAddNewMember={() => setIsAddMemberOpen(true)}
      />
    </div>
  );
};

export default FormHeader;
