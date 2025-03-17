// constants/DashboardData.ts

// Define types for dashboard data structures
export interface MemberData {
    name: string;
    status: "Forms Incomplete" | "Forms Complete" | "Form Submitted" | "Approved";
    remarks: number;
  }
  
  export interface PackageData {
    id: string;
    status: "Not Purchased" | "Purchased" | "Processing" | "Approved" | "Rejected";
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
        { name: "Rajeev", status: "Forms Incomplete", remarks: 0 }
      ],
      memberCount: 2,
      createdAt: "2025-02-25"
    },
    {
      id: "DOC/MAR/12/891245",
      status: "Purchased",
      type: "Business Visa",
      entries: "Single",
      validity: "6 Months",
      members: [
        { name: "Priya", status: "Forms Complete", remarks: 2 }
      ],
      memberCount: 1,
      createdAt: "2025-03-12"
    }
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
  export const updatePackage = async (packageId: string, data: Partial<PackageData>): Promise<PackageData> => {
    // In a real implementation, this would send an update to your API
    // For now, just simulate an update
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedPackage = samplePackages.find(p => p.id === packageId);
        if (updatedPackage) {
          Object.assign(updatedPackage, data);
          resolve(updatedPackage);
        } else {
          throw new Error("Package not found");
        }
      }, 500);
    });
  };