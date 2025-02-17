export const packageData = {
    usa: {
      title: "United States - Open for Tourism, here's what you'll need",
      processedDocs: "46,500+",
      requirementFields: [
        { label: "Citizenship", options: ["Indian", "Chinese", "British"] },
        { label: "Applying From", options: ["India", "China", "UK"] },
        { label: "Destination", options: ["USA"], fixed: true }
      ],
    },
    india: {
      title: "India - E-Visa Available",
      processedDocs: "32,800+",
      requirementFields: [
        { label: "Citizenship", options: ["American", "British", "Australian"] },
        { label: "Applying From", options: ["USA", "UK", "Australia"] },
        { label: "Destination", options: ["India"], fixed: true }
      ],
      
    },
    unitedKingdom: {
      title: "United Kingdom - Visa Information",
      processedDocs: "25,000+",
      requirementFields: [
        { label: "Citizenship", options: ["Indian", "American", "Australian"] },
        { label: "Applying From", options: ["India", "USA", "Australia"] },
        { label: "Destination", options: ["United Kingdom"], fixed: true }
      ],
      
    }
  };

  export const packageCard = {
    usa: [
      {
        id: 1,
        title: "5 Years Package for United States of America",
        duration: "2 Months",
        numberOfEntries: "Multiple",
        governmentFees: 29,
        documitraFees: 19,
        validityPeriod: "5 Years"
      },
      {
        id: 2,
        title: "3 Months Package for USA",
        duration: "2 Months",
        numberOfEntries: "Multiple",
        governmentFees: 29,
        documitraFees: 19,
        validityPeriod: "3 Months"
      },
      {
        id: 3,
        title: "1 Year Package for USA",
        duration: "6 Months",
        numberOfEntries: "Multiple",
        governmentFees: 50,
        documitraFees: 30,
        validityPeriod: "1 Year"
      }
    ],
    india: [
      {
        id: 1,
        title: "1 Year Package for India",
        duration: "1 Month",
        numberOfEntries: "Multiple",
        governmentFees: 25,
        documitraFees: 15,
        validityPeriod: "1 Year"
      },
      {
        id: 2,
        title: "6 Months Package for India",
        duration: "1 Month",
        numberOfEntries: "Multiple",
        governmentFees: 20,
        documitraFees: 15,
        validityPeriod: "6 Months"
      }
    ]
  };

  // constants/visaProcessData.ts

  export const visaProcessSteps = {
    usa: [
      {
        id: 1,
        number: "1",
        description: "Fill out the online simplified application with the guidance of our Guide Manual."
      },
      {
        id: 2,
        number: "2",
        description: "Fill out the online simplified application with the guidance of our Guide Manual."
      },
      {
        id: 3,
        number: "3",
        description: "Fill out the online simplified application with the guidance of our Guide Manual."
      },
      {
        id: 4,
        number: "4",
        description: "Fill out the online simplified application with the guidance of our Guide Manual."
      },
      {
        id: 5,
        number: "5",
        description: "Fill out the online simplified application with the guidance of our Guide Manual."
      },
      {
        id: 6,
        number: "6",
        description: "Fill out the online simplified application with the guidance of our Guide Manual."
      }
    ],
    india: [
      {
        id: 1,
        number: "1",
        description: "Complete the online application form for the Indian E-Visa."
      },
      {
        id: 2,
        number: "2",
        description: "Upload the required documents, including a passport-sized photo and a copy of your passport."
      },
      {
        id: 3,
        number: "3",
        description: "Pay the visa fee using a secure online payment method."
      },
      {
        id: 4,
        number: "4",
        description: "Receive the E-Visa approval via email within a few business days."
      },
      {
        id: 5,
        number: "5",
        description: "Print the E-Visa approval and carry it with you when you travel to India."
      },
      {
        id: 6,
        number: "6",
        description: "Present the E-Visa approval at the immigration checkpoint upon arrival in India."
      }
    ]
    // Add more countries as needed
  };

  export const applicationProcessData = [
    {
      id:1,
      title: "United States of America",
      description: "The United States of America is a country located in North America. It is known for its diverse culture, stunning landscapes, and iconic landmarks. If you are planning to visit the USA for tourism or business purposes, you will need to apply for a visa. The visa application process for the USA can be complex and time-consuming, but with the help of Documitra, you can simplify the process and get your visa quickly and easily."
    },
    {
      id: 2,
      title: "India",
      description: "India is a country in South Asia known for its rich history, diverse culture, and vibrant landscapes. If you are planning to visit India for tourism, business, or medical purposes, you will need to apply for an E-Visa. The E-Visa application process for India is straightforward and can be completed online. With the assistance of Documitra, you can ensure a smooth and hassle-free visa application experience."
    },
    {
      id: 3,
      title: "United Kingdom",
      description: "The United Kingdom is a country located in Europe, known for its historic landmarks, cultural heritage, and picturesque countryside. If you are planning to visit the UK for tourism, business, or study purposes, you will need to apply for a visa. The visa application process for the UK can be detailed and requires careful preparation. Documitra can help you navigate the process and obtain your visa efficiently."
    }
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
    applicationSubmission: "dd/mm/yy",
    biometricsSubmitted: "dd/mm/yy",
    passportRequestReceived: "dd/mm/yy",
    visaReceived: "dd/mm/yy"
  },
  {
    id: 2,
    applicationType: "Visa Renewal",
    applicationSubmission: "dd/mm/yy",
    biometricsSubmitted: "dd/mm/yy",
    passportRequestReceived: "dd/mm/yy",
    visaReceived: "dd/mm/yy"
  },
  {
    id: 3,
    applicationType: "Fresh Visa",
    applicationSubmission: "dd/mm/yy",
    biometricsSubmitted: "dd/mm/yy",
    passportRequestReceived: "dd/mm/yy",
    visaReceived: "dd/mm/yy"
  },
  {
    id: 4,
    applicationType: "Fresh Visa",
    applicationSubmission: "dd/mm/yy",
    biometricsSubmitted: "dd/mm/yy",
    passportRequestReceived: "dd/mm/yy",
    visaReceived: "dd/mm/yy"
  },
  {
    id: 5,
    applicationType: "Fresh Visa",
    applicationSubmission: "dd/mm/yy",
    biometricsSubmitted: "dd/mm/yy",
    passportRequestReceived: "dd/mm/yy",
    visaReceived: "dd/mm/yy"
  }
];