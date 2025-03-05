// src/constants/governmentServicesData.ts



export interface GovernmentServiceQuestion {
  title: string;
  content: string;
}

export interface GovernmentServiceTopic {
  questions: GovernmentServiceQuestion[];
}

export type GovernmentServiceTopicName = 
  | 'OCI'
  | 'VISA'
  | 'PASSPORT'
  | 'PAN CARD'
  | 'DRIVING LICENCE'
  | 'VOTER ID'
  | 'AADHAR CARD';

export const SIDEBAR_ITEMS: GovernmentServiceTopicName[] = [
  'OCI',
  'VISA', 
  'PASSPORT', 
  'PAN CARD', 
  'DRIVING LICENCE', 
  'VOTER ID', 
  'AADHAR CARD'
];

export const GOVERNMENT_SERVICES: Record<GovernmentServiceTopicName, GovernmentServiceTopic> = {
  OCI: {
    questions: [
      {
        title: "1. Who is eligible to apply for OCI?",
        content: "Foreign nationals of Indian origin who have renounced their Indian citizenship or those who were eligible to become Indian citizens on or after 26.01.1950."
      },
      // ... (rest of the questions remain the same as in the previous example)
    ]
  },
  // ... (other topics remain the same)
};