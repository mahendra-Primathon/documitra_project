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
        title: "3Months Package for USA",
        duration: "2 Months",
        numberOfEntries: "Multiple",
        governmentFees: 29,
        documitraFees: 19,
        validityPeriod: "3 Months"
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
        title: "6Months Package for India",
        duration: "1 Month",
        numberOfEntries: "Multiple",
        governmentFees: 20,
        documitraFees: 15,
        validityPeriod: "6 Months"
      }
    ]
  };