// constants/dashboardData.ts
// Define types for dashboard data structures
export interface MemberData {
  name: string;
  status:
    | "Forms Incomplete"
    | "Forms Complete"
    | "Documents under review"
    | "Approved";
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
  entries: "Single" | "Multiple";
  validity: string;
  members: MemberData[];
  memberCount: number;
  createdAt?: string;
  country?: string; // Added country field to match with form data
}

export type DocumentType =
  | "oci"
  | "visa"
  | "passport"
  | "pancard"
  | "driving-licence"
  | "voter-id"
  | "aadhar-card";

// Sample data for development and testing
export const samplePackages: PackageData[] = [
  {
    id: "DOC/FEB/25/890807",
    status: "Not Purchased",
    type: "3Months Package for USA",
    entries: "Multiple",
    validity: "2 Months",
    members: [{ name: "Rajeev", status: "Forms Incomplete", remarks: 0 }],
    memberCount: 1,
    createdAt: "2025-02-25",
    country: "USA",
  },
  {
    id: "DOC/MAR/12/891245",
    status: "Not Purchased",
    type: "Business Visa",
    entries: "Single",
    validity: "6 Months",
    members: [{ name: "Priya", status: "Forms Incomplete", remarks: 0 }],
    memberCount: 1,
    createdAt: "2025-03-12",
    country: "Canada",
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const updatedPackage = samplePackages.find((p) => p.id === packageId);
      if (updatedPackage) {
        Object.assign(updatedPackage, data);
        resolve(updatedPackage);
      } else {
        reject(new Error("Package not found"));
      }
    }, 500);
  });
};

// Function to update member status
export const updateMemberStatus = async (
  packageId: string,
  memberName: string,
  status: MemberData["status"],
  remarks: number = 0
): Promise<PackageData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pkg = samplePackages.find((p) => p.id === packageId);
      if (pkg) {
        const member = pkg.members.find((m) => m.name === memberName);
        if (member) {
          member.status = status;
          member.remarks = remarks;
          resolve(pkg);
        } else {
          reject(new Error("Member not found"));
        }
      } else {
        reject(new Error("Package not found"));
      }
    }, 500);
  });
};

export interface ServiceItem {
  id: DocumentType;
  title: string;
  icon: string;
}


export interface FormData {
  _id: string;
  name: string;
  age: string;
  gender: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  address: string;
  country: string;
  postalCode: string;
  governmentId: string;
  nationality: string;
  imageUrl: string;
  pdfUrl: string;
  packageCountry: string;
  packageId: string;
}

// Interface for package information
export interface PackageInfo {
  id: number;
  title: string;
  duration: string;
  numberOfEntries: string;
  validityPeriod: string;
  governmentFees: number;
  documitraFees: number;
}

export const getPackageDetails = (packageCountry: string, packageId: string): PackageInfo | null => {
  // Convert packageId to number for matching
  const numericPackageId = parseInt(packageId, 10);
  
  // Check if the country exists in packageCard
  if (packageCard[packageCountry as keyof typeof packageCard]) {
    // Find the package with matching id
    const packageInfo = packageCard[packageCountry as keyof typeof packageCard].find(
      pkg => pkg.id === numericPackageId
    );
    
    if (packageInfo) {
      return packageInfo;
    }
  }
  
  return null;
};


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
