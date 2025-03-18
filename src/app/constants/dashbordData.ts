// constants/DashboardData.ts

// Define types for dashboard data structures
import psVisa from "@/../public/assets/images/Home/PSvisa.svg"
export interface MemberData {
  name: string;
  status: "Forms Incomplete" | "Forms Complete" | "Form Submitted" | "Approved";
  remarks: number;
}

export interface PackageData {
  id: string;
  status:
    | "Not Purchased"
    | "Purchased"
    | "Processing"
    | "Approved"
    | "Rejected";
  type: string;
  entries: "Single" | "Multiples";
  validity: string;
  members: MemberData[];
  memberCount: number;
  createdAt?: string;
}

// Sample data for development and testing
export const samplePackages: PackageData[] = [
  {
    id: "DOC/FEB/25/890807",
    status: "Not Purchased",
    type: "New OCI",
    entries: "Multiples",
    validity: "Lifelong",
    members: [
      { name: "sunil", status: "Forms Incomplete", remarks: 0 },
      { name: "Rajeev", status: "Forms Incomplete", remarks: 0 },
    ],
    memberCount: 2,
    createdAt: "2025-02-25",
  },
  {
    id: "DOC/MAR/12/891245",
    status: "Purchased",
    type: "Business Visa",
    entries: "Single",
    validity: "6 Months",
    members: [{ name: "Priya", status: "Forms Complete", remarks: 2 }],
    memberCount: 1,
    createdAt: "2025-03-12",
  },
];

// Function to get packages from local storage or API
export const getPackages = async (): Promise<PackageData[]> => {
  // In a real implementation, this would fetch from an API
  // For now, return the sample data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(samplePackages);
    }, 500); // Simulate network delay
  });
};

// Function to update package data
export const updatePackage = async (
  packageId: string,
  data: Partial<PackageData>
): Promise<PackageData> => {
  // In a real implementation, this would send an update to your API
  // For now, just simulate an update
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedPackage = samplePackages.find((p) => p.id === packageId);
      if (updatedPackage) {
        Object.assign(updatedPackage, data);
        resolve(updatedPackage);
      } else {
        throw new Error("Package not found");
      }
    }, 500);
  });
};

export interface ServiceItem {
  id: DocumentType;
  title: string;
  icon: string;
}

export const PREMIUM_SERVICES: ServiceItem[] = [
  {
    id: "oci",
    title: "OCI",
    icon: "https://cdn-icons-png.flaticon.com/512/4300/4300059.png",
  },
  {
    id: "visa",
    title: "Visa",
    icon: "https://cdn-icons-png.flaticon.com/512/3039/3039357.png",
  },
  {
    id: "passport",
    title: "Passport",
    icon: "https://cdn-icons-png.flaticon.com/512/1184/1184048.png",
  },
  {
    id: "pancard",
    title: "PAN Card",
    icon: "https://cdn-icons-png.flaticon.com/512/2874/2874830.png",
  },
  {
    id: "driving-licence",
    title: "Driving Licence",
    icon: "https://cdn-icons-png.flaticon.com/512/1532/1532042.png",
  },
  {
    id: "voter-id",
    title: "Voter ID",
    icon: "https://cdn-icons-png.flaticon.com/512/2190/2190552.png",
  },
  {
    id: "aadhar-card",
    title: "Aadhar Card",
    icon: "https://cdn-icons-png.flaticon.com/512/4616/4616089.png",
  },
];
