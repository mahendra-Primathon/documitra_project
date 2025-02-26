// src/constants/formsData.ts

export interface FormData {
  // Page 1 data
  name: string;
  age: string;
  phoneNumber: string;
  gender: string;
  countryCode: string;
  email: string;
  nationality: string;
  governmentId: string;

  // Page 2 data
  address: string;
  postalCode: string;
  country: string;

  // Page 3 data
  imageUrl: string; // Add this line
  pdfUrl: string;   // Add this line
}

export const INITIAL_FORM_DATA: FormData = {
  name: "",
  age: "",
  gender: "",
  phoneNumber: "",
  countryCode: "+91",
  email: "",
  nationality: "",
  governmentId: "",
  address: "",
  postalCode: "",
  country: "",
  imageUrl: "",
  pdfUrl: ""
};

export const FORM_STEPS = [
  { id: 1, label: "Personal Details" },
  { id: 2, label: "Address Details" },
  { id: 3, label: "File Upload" },
  // { id: 4, label: "Review" },
];



export const VISA_FORM_CONSTANTS = {
  routes: {
    HOME: "/",
    PACKAGES: "/packages",
    USA_VISA: "/packages/usa",
  },

  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Packages", path: "/packages" },
    { label: "USA", path: "/packages/usa" },
  ],

  usa: {
    title: "5 Years Package for United States of America",
    subtitle: "Visa for India - USA",
    stepDuration: "3min",
    totalSteps: 5,
    packageDetails: {
      numberOfEntries: "Multiple",
      duration: "2 Months",
      documentFees: "$19",
    },
  },

  formLabels: {
    addMembers: "Add Members",
    saveExit: "Save & Exit",
  },
} as const;


export const COUNTRY_CODES = [
  { code: "+1", country: "USA" },
  { code: "+7", country: "Russia" },
  { code: "+20", country: "Egypt" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+39", country: "Italy" },
  { code: "+44", country: "UK" },
  { code: "+49", country: "Germany" },
  { code: "+55", country: "Brazil" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+86", country: "China" },
  { code: "+91", country: "India" },
  { code: "+971", country: "UAE" },
];