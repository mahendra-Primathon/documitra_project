// constants/userProfileData.ts
export interface UserProfile {
  fname: string;
  lname: string;
  email: string;
  phone: string;
}

export interface AddressData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface OrderData {
  date: string;
  type: string;
  documentId: string;
  trackingId: string;
  total: number;
}

// Sample data for profile
export const sampleUserProfile: UserProfile = {
  fname: "Radha",
  lname: "Patidhar",
  email: "radhe@patidhar.com",
  phone: "+91 12341 12341",
};

// Sample data for address
export const sampleAddress: AddressData = {
  street: "123 Main Street",
  city: "Bangalore",
  state: "Karnataka",
  zipCode: "560001",
  country: "India",
};

// Sample data for orders
export const sampleOrders: OrderData[] = [
  {
    date: "12 Sep 2024",
    type: "USA B2 Visa",
    documentId: "DOC123US24567",
    trackingId: "123456789",
    total: 299.0,
  },
  {
    date: "15 Aug 2024",
    type: "UK Tourist Visa",
    documentId: "DOC123UK24568",
    trackingId: "987654321",
    total: 249.0,
  },
  {
    date: "20 Jul 2024",
    type: "Canada PR Visa",
    documentId: "DOC123CA24569",
    trackingId: "456123789",
    total: 399.0,
  },
];
