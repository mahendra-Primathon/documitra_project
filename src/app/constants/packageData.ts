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