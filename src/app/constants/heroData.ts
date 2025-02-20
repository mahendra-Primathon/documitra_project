import { GlobeIcon, FileText, User, CreditCard } from "lucide-react";
import React from "react";

// Types
export interface DocumentType {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface Location {
  id: string;
  name: string;
}

// Constants
export const documentTypes: DocumentType[] = [
  {
    id: "oci",
    name: "OCI",
    icon: React.createElement(GlobeIcon, { className: "w-5 h-5" }),
  },
  {
    id: "visa",
    name: "Visa",
    icon: React.createElement(FileText, { className: "w-5 h-5" }),
  },
  {
    id: "passport",
    name: "Passport",
    icon: React.createElement(User, { className: "w-5 h-5" }),
  },
  {
    id: "pancard",
    name: "Pan Card",
    icon: React.createElement(CreditCard, { className: "w-5 h-5" }),
  },
];

export const moreOptions: DocumentType[] = [
  {
    id: "driving",
    name: "Driving License",
    icon: React.createElement(FileText, { className: "w-5 h-5" }),
  },
  {
    id: "voter",
    name: "Voter ID",
    icon: React.createElement(FileText, { className: "w-5 h-5" }),
  },
  {
    id: "aadhar",
    name: "Aadhar Card",
    icon: React.createElement(FileText, { className: "w-5 h-5" }),
  },
];

export const locations: Location[] = [
  { id: "india", name: "India" },
  { id: "usa", name: "USA" },
  { id: "london", name: "london" },
  { id: "canada", name: "Canada" },
];
