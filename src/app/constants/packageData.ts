export const packageData = {
  usa: {
    title: "United States  - Open for Tourism, here's what you'll need",
    processedDocs: "46,500+",
    requirementFields: [
      { label: "Citizenship", options: ["India", "USA", "London", "Canada"] },
      { label: "Applying From", options: ["India", "USA", "London", "Canada"] },
      { label: "Destination", options: ["India", "USA", "London", "Canada"] },
    ],
  },
  india: {
    title: "India - E-Visa Available",
    processedDocs: "32,800+",
    requirementFields: [
      { label: "Citizenship", options: ["USA", "London", "Canada"] },
      { label: "Applying From", options: ["USA", "London", "Canada"] },
      { label: "Destination", options: ["India", "USA", "London", "Canada"] },
    ],
  },
  london: {
    title: "London - Travel & Visa Details",
    processedDocs: "25,000+",
    requirementFields: [
      { label: "Citizenship", options: ["India", "USA", "London", "Canada"] },
      { label: "Applying From", options: ["India", "USA", "London", "Canada"] },
      { label: "Destination", options: ["India", "USA", "London", "Canada"] },
    ],
  },
  canada: {
    title: "Canada - Visa & Immigration",
    processedDocs: "30,200+",
    requirementFields: [
      { label: "Citizenship", options: ["India", "USA", "London"] },
      { label: "Applying From", options: ["India", "USA", "London"] },
      { label: "Destination", options: ["India", "USA", "London", "Canada"] },
    ],
  },
};


export const packageCard = 
{
  "india": [
    {
      "id": 1,
      "title": "1 Year Package for India",
      "duration": "1 Month",
      "numberOfEntries": "Multiple",
      "governmentFees": 25,
      "documitraFees": 15,
      "validityPeriod": "1 Year"
    },
    {
      "id": 2,
      "title": "6 Months Package for India",
      "duration": "1 Month",
      "numberOfEntries": "Multiple",
      "governmentFees": 20,
      "documitraFees": 15,
      "validityPeriod": "6 Months"
    },
    {
      "id": 3,
      "title": "3 Year Package for India",
      "duration": "2 Months",
      "numberOfEntries": "Multiple",
      "governmentFees": 60,
      "documitraFees": 30,
      "validityPeriod": "3 Year"
    }
  ],
  "usa": [
    {
      "id": 1,
      "title": "5 Years Package for United States of America",
      "duration": "2 Months",
      "numberOfEntries": "Multiple",
      "governmentFees": 29,
      "documitraFees": 19,
      "validityPeriod": "5 Years"
    },
    {
      "id": 2,
      "title": "3 Months Package for USA",
      "duration": "2 Months",
      "numberOfEntries": "Multiple",
      "governmentFees": 29,
      "documitraFees": 19,
      "validityPeriod": "3 Months"
    },
    {
      "id": 3,
      "title": "1 Year Package for USA",
      "duration": "6 Months",
      "numberOfEntries": "Multiple",
      "governmentFees": 50,
      "documitraFees": 30,
      "validityPeriod": "1 Year"
    }
  ],
  "uk": [
    {
      "id": 1,
      "title": "2 Year Package for UK",
      "duration": "1 Month",
      "numberOfEntries": "Multiple",
      "governmentFees": 70,
      "documitraFees": 40,
      "validityPeriod": "2 Years"
    },
    {
      "id": 2,
      "title": "6 Months Package for UK",
      "duration": "1 Month",
      "numberOfEntries": "Multiple",
      "governmentFees": 45,
      "documitraFees": 25,
      "validityPeriod": "6 Months"
    }
  ],
  "canada": [
    {
      "id": 1,
      "title": "3 Years Package for Canada",
      "duration": "2 Months",
      "numberOfEntries": "Multiple",
      "governmentFees": 60,
      "documitraFees": 35,
      "validityPeriod": "3 Years"
    },
    {
      "id": 2,
      "title": "1 Year Package for Canada",
      "duration": "1 Month",
      "numberOfEntries": "Multiple",
      "governmentFees": 40,
      "documitraFees": 20,
      "validityPeriod": "1 Year"
    },
    {
      "id": 3,
      "title": "6 Months Package for Canada",
      "duration": "1 Month",
      "numberOfEntries": "Multiple",
      "governmentFees": 30,
      "documitraFees": 18,
      "validityPeriod": "6 Months"
    }
  ],
  "london": [
    {
      "id": 1,
      "title": "4 Year Package for london",
      "duration": "2 Months",
      "numberOfEntries": "Multiple",
      "governmentFees": 80,
      "documitraFees": 50,
      "validityPeriod": "4 Years"
    },
    {
      "id": 2,
      "title": "12 Months Package for london",
      "duration": "1 Month",
      "numberOfEntries": "Multiple",
      "governmentFees": 55,
      "documitraFees": 30,
      "validityPeriod": "12 Months"
    }
  ]
};

// constants/visaProcessData.ts

export const visaProcessSteps = {
  usa: [
    {
      id: 1,
      number: "1",
      description:
        "Fill out the online visa application form with accurate details.",
    },
    {
      id: 2,
      number: "2",
      description:
        "Schedule a visa interview at the nearest U.S. embassy or consulate.",
    },
    {
      id: 3,
      number: "3",
      description:
        "Gather required documents, including passport, photo, and financial proof.",
    },
    {
      id: 4,
      number: "4",
      description:
        "Attend the visa interview and provide biometric data if required.",
    },
    {
      id: 5,
      number: "5",
      description:
        "Wait for visa processing and check your application status online.",
    },
    {
      id: 6,
      number: "6",
      description:
        "Receive your visa and verify the details before traveling to the USA.",
    },
  ],
  india: [
    {
      id: 1,
      number: "1",
      description:
        "Complete the online application form for the Indian E-Visa.",
    },
    {
      id: 2,
      number: "2",
      description:
        "Upload the required documents, including a passport-sized photo and a copy of your passport.",
    },
    {
      id: 3,
      number: "3",
      description: "Pay the visa fee using a secure online payment method.",
    },
    {
      id: 4,
      number: "4",
      description:
        "Receive the E-Visa approval via email within a few business days.",
    },
    {
      id: 5,
      number: "5",
      description:
        "Print the E-Visa approval and carry it with you when you travel to India.",
    },
    {
      id: 6,
      number: "6",
      description:
        "Present the E-Visa approval at the immigration checkpoint upon arrival in India.",
    },
  ],
  london: [
    {
      id: 1,
      number: "1",
      description:
        "Fill out the online visa application form with accurate personal details.",
    },
    {
      id: 2,
      number: "2",
      description:
        "Book an appointment for biometric submission at a visa application center.",
    },
    {
      id: 3,
      number: "3",
      description:
        "Gather necessary documents, including passport, financial proof, and invitation letter.",
    },
    {
      id: 4,
      number: "4",
      description:
        "Submit the visa application and attend the biometric appointment.",
    },
    {
      id: 5,
      number: "5",
      description:
        "Track your application status online and wait for processing completion.",
    },
    {
      id: 6,
      number: "6",
      description:
        "Collect your passport with the visa or receive a decision by email.",
    },
  ],
  canada: [
    {
      id: 1,
      number: "1",
      description:
        "Complete the online visa application through the official Canada portal.",
    },
    {
      id: 2,
      number: "2",
      description:
        "Upload required documents, including passport, photograph, and travel history.",
    },
    {
      id: 3,
      number: "3",
      description:
        "Pay the visa processing fee through an accepted online payment method.",
    },
    {
      id: 4,
      number: "4",
      description:
        "Schedule and attend a biometric appointment at a visa center if needed.",
    },
    {
      id: 5,
      number: "5",
      description:
        "Monitor application status online and respond to any additional requests.",
    },
    {
      id: 6,
      number: "6",
      description:
        "Receive your visa decision and ensure all details are correct before traveling.",
    },
  ],
};

// export default visaProcessSteps;


export const applicationProcessData = [
  {
    id: 1,
    title: "United States of America",
    description:
      "The United States of America is a country located in North America. It is known for its diverse culture, stunning landscapes, and iconic landmarks. If you are planning to visit the USA for tourism or business purposes, you will need to apply for a visa. The visa application process for the USA can be complex and time-consuming, but with the help of Documitra, you can simplify the process and get your visa quickly and easily.",
  },
  {
    id: 2,
    title: "India",
    description:
      "India is a country in South Asia known for its rich history, diverse culture, and vibrant landscapes. If you are planning to visit India for tourism, business, or medical purposes, you will need to apply for an E-Visa. The E-Visa application process for India is straightforward and can be completed online. With the assistance of Documitra, you can ensure a smooth and hassle-free visa application experience.",
  },
  {
    id: 3,
    title: "United Kingdom",
    description:
      "The United Kingdom is a country located in Europe, known for its historic landmarks, cultural heritage, and picturesque countryside. If you are planning to visit the UK for tourism, business, or study purposes, you will need to apply for a visa. The visa application process for the UK can be detailed and requires careful preparation. Documitra can help you navigate the process and obtain your visa efficiently.",
  },
  {
    id: 4,
    title: "Canada",
    description:
      "Canada, located in North America, is known for its natural beauty, multicultural cities, and friendly atmosphere. If you are planning to visit Canada for tourism, work, or study, you will need to apply for a visa. The visa application process for Canada involves document submission, biometric verification, and processing time. Documitra can assist you in ensuring a smooth and hassle-free visa application.",
  },
];


// constants/timelineData.ts

export interface TimelineEntry {
  id: number;
  applicationType: string;
  applicationSubmission: string;
  biometricsSubmitted: string;
  passportRequestReceived: string;
  visaReceived: string;
}

export const visaTimelineData: TimelineEntry[] = [
  {
    id: 1,
    applicationType: "Fresh Visa",
    applicationSubmission: "05/01/24",
    biometricsSubmitted: "10/01/24",
    passportRequestReceived: "18/01/24",
    visaReceived: "25/01/24",
  },
  {
    id: 2,
    applicationType: "Visa Renewal",
    applicationSubmission: "12/02/24",
    biometricsSubmitted: "17/02/24",
    passportRequestReceived: "25/02/24",
    visaReceived: "02/03/24",
  },
  {
    id: 3,
    applicationType: "Fresh Visa",
    applicationSubmission: "20/03/24",
    biometricsSubmitted: "25/03/24",
    passportRequestReceived: "05/04/24",
    visaReceived: "12/04/24",
  },
  {
    id: 4,
    applicationType: "Fresh Visa",
    applicationSubmission: "08/04/24",
    biometricsSubmitted: "13/04/24",
    passportRequestReceived: "22/04/24",
    visaReceived: "29/04/24",
  },
  {
    id: 5,
    applicationType: "Fresh Visa",
    applicationSubmission: "15/05/24",
    biometricsSubmitted: "20/05/24",
    passportRequestReceived: "30/05/24",
    visaReceived: "06/06/24",
  },
];
