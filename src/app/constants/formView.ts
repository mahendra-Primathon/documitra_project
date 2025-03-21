// Constants for Form View Component

export interface Remark {
  id: string;
  message: string;
  date: string;
}

export interface FormData {
  _id: string;
  name: string;
  age: number;
  gender: string;
  phoneNumber: string;
  email: string;
  nationality: string;
  address: string;
  country: string;
  packageUniqueId: string;
  packageCountry: string;
  imageUrl: string;
  pdfUrl: string;
}

// Document types
export interface Document {
  id: string;
  name: string;
  date: string;
  size: string;
  isValid: boolean;
  errorMessage?: string;
  uploaded?: boolean;
  file?: File | string; // Can be a File object or a URL string
}

export interface DocumentSection {
  id: string;
  name: string;
  maxFiles: number;
  documents: Document[];
  instructions: string;
}

export const DEFAULT_DOCUMENT_SECTIONS: DocumentSection[] = [
  {
    id: "passport",
    name: "Passport",
    maxFiles: 3,
    documents: [
      {
        id: "p1",
        name: "Document.pdf",
        date: "12 Aug 2024",
        size: "1mb",
        isValid: true,
        uploaded: true,
        file: "/document-placeholder.jpg",
      },
      {
        id: "p2",
        name: "Document.pdf",
        date: "12 Aug 2024",
        size: "1mb",
        isValid: true,
        uploaded: true,
        file: "/document-placeholder.jpg",
      },
      {
        id: "p3",
        name: "Document.pdf",
        date: "12 Aug 2024",
        size: "1mb",
        isValid: true,
        uploaded: true,
        file: "/document-placeholder.jpg",
      },
    ],
    instructions:
      "INSTRUCTIONS: Upload 3 Photos: Front which should cover face elements, like Upload 2 Photos: Front which should cover face elements, like which should cover face elements, like",
  },
  {
    id: "document2",
    name: "Document2",
    maxFiles: 3,
    documents: [],
    instructions:
      "INSTRUCTIONS: Upload 3 Photos: Front which should cover all required elements.",
  },
  {
    id: "document3",
    name: "Document3",
    maxFiles: 3,
    documents: [],
    instructions:
      "INSTRUCTIONS: Upload 3 Photos: Front which should cover all required elements.",
  },
];

// Sample default data
export const DEFAULT_REMARKS: Remark[] = [
  {
    id: "1",
    message: "The photo is not bright enough. Please reupload file.",
    date: "12 Dec 2023",
  },
  {
    id: "2",
    message: "The photo is not bright enough. Please reupload file.",
    date: "15 Dec 2023",
  },
  {
    id: "3",
    message: "The photo is not bright enough. Please reupload file.",
    date: "18 Dec 2023",
  },
  {
    id: "4",
    message: "The photo is not bright enough. Please reupload file.",
    date: "21 Dec 2023",
  },
];

export const DEFAULT_FORM_DATA: FormData = {
  _id: "1",
  name: "John Doe",
  age: 30,
  gender: "Male",
  phoneNumber: "+1 123 456 7890",
  email: "john.doe@example.com",
  nationality: "American",
  address: "123 Main St, Anytown",
  country: "United States",
  packageUniqueId: "PKG-12345",
  packageCountry: "Thailand",
  imageUrl: "/sample-photo.jpg",
  pdfUrl: "/sample-document.pdf",
};

export const DEFAULT_DOCUMENTS: Document[] = [
  {
    id: "1",
    name: "Document_front.pdf",
    date: "12 Aug 2024",
    size: "1mb",
    isValid: false,
    errorMessage:
      "Remarks: The photo is not bright enough. Please reupload file.",
  },
  {
    id: "2",
    name: "Document_back.pdf",
    date: "21 Aug 2024",
    size: "2mb",
    isValid: true,
  },
  // {
  //   id: "3",
  //   name: "Document.pdf",
  //   date: "12 Aug 2024",
  //   size: "1mb",
  //   isValid: true,
  // },
];

// Sections for the accordion
export const FORM_VIEW_SECTIONS = {
  REMARKS: "remarks",
  FORMS: "forms",
  DOCUMENTS: "documents",
};
