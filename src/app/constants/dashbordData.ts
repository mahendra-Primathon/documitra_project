// constants/dashboardData.ts

export type DocumentType =
  | "oci"
  | "visa"
  | "passport"
  | "pancard"
  | "driving-licence"
  | "voter-id"
  | "aadhar-card";

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

export const getPackageDetails = (
  packageCountry: string,
  packageId: string
): PackageInfo | null => {
  // Convert packageId to number for matching
  const numericPackageId = parseInt(packageId, 10);

  // Check if the country exists in packageCard
  if (packageCard[packageCountry as keyof typeof packageCard]) {
    // Find the package with matching id
    const packageInfo = packageCard[
      packageCountry as keyof typeof packageCard
    ].find((pkg) => pkg.id === numericPackageId);

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
  // {
  //   id: "aadhar-card",
  //   title: "Aadhar Card",
  //   icon: "https://cdn-icons-png.flaticon.com/512/4616/4616089.png",
  // },
];

export const packageCardUniqueId = {
  "01": [
    {
      id: 1,
      title: "1 Year Package for India",
      duration: "1 Month",
      numberOfEntries: "Multiple",
      governmentFees: 25,
      documitraFees: 15,
      validityPeriod: "1 Year",
      country: "India",
    },
  ],
  "02": [
    {
      id: 2,
      title: "6 Months Package for India",
      duration: "1 Month",
      numberOfEntries: "Multiple",
      governmentFees: 20,
      documitraFees: 15,
      validityPeriod: "6 Months",
      country: "India",
    },
  ],
  "03": [
    {
      id: 3,
      title: "3 Year Package for India",
      duration: "2 Months",
      numberOfEntries: "Multiple",
      governmentFees: 60,
      documitraFees: 30,
      validityPeriod: "3 Years",
      country: "India",
    },
  ],
  "04": [
    {
      id: 4,
      title: "5 Years Package for USA",
      duration: "2 Months",
      numberOfEntries: "Multiple",
      governmentFees: 29,
      documitraFees: 19,
      validityPeriod: "5 Years",
      country: "USA",
    },
  ],
  "05": [
    {
      id: 5,
      title: "3 Months Package for USA",
      duration: "2 Months",
      numberOfEntries: "Multiple",
      governmentFees: 29,
      documitraFees: 19,
      validityPeriod: "3 Months",
      country: "USA",
    },
  ],
  "06": [
    {
      id: 6,
      title: "1 Year Package for USA",
      duration: "6 Months",
      numberOfEntries: "Multiple",
      governmentFees: 50,
      documitraFees: 30,
      validityPeriod: "1 Year",
      country: "USA",
    },
  ],
  "07": [
    {
      id: 7,
      title: "2 Year Package for UK",
      duration: "1 Month",
      numberOfEntries: "Multiple",
      governmentFees: 70,
      documitraFees: 40,
      validityPeriod: "2 Years",
      country: "UK",
    },
  ],
  "08": [
    {
      id: 8,
      title: "6 Months Package for UK",
      duration: "1 Month",
      numberOfEntries: "Multiple",
      governmentFees: 45,
      documitraFees: 25,
      validityPeriod: "6 Months",
      country: "UK",
    },
  ],
  "09": [
    {
      id: 9,
      title: "3 Years Package for Canada",
      duration: "2 Months",
      numberOfEntries: "Multiple",
      governmentFees: 60,
      documitraFees: 35,
      validityPeriod: "3 Years",
      country: "Canada",
    },
  ],
  "10": [
    {
      id: 10,
      title: "1 Year Package for Canada",
      duration: "1 Month",
      numberOfEntries: "Multiple",
      governmentFees: 40,
      documitraFees: 20,
      validityPeriod: "1 Year",
      country: "Canada",
    },
  ],
  "11": [
    {
      id: 11,
      title: "6 Months Package for Canada",
      duration: "1 Month",
      numberOfEntries: "Multiple",
      governmentFees: 30,
      documitraFees: 18,
      validityPeriod: "6 Months",
      country: "Canada",
    },
  ],
  "12": [
    {
      id: 12,
      title: "4 Year Package for London",
      duration: "2 Months",
      numberOfEntries: "Multiple",
      governmentFees: 80,
      documitraFees: 50,
      validityPeriod: "4 Years",
      country: "London",
    },
  ],
  "13": [
    {
      id: 13,
      title: "12 Months Package for London",
      duration: "1 Month",
      numberOfEntries: "Multiple",
      governmentFees: 55,
      documitraFees: 30,
      validityPeriod: "12 Months",
      country: "London",
    },
  ],
};

// Hardcoded purchased package example
export const hardcodedPurchasedPackage = {
  isPurchased: true,
  title: "4 Year Package for London",
  numberOfEntries: "Multiple",
  duration: "2 Months",
  governmentFees: "$80",
  documitraFees: "$50",
  validityPeriod: "4 Years",
  country: "London",
};
