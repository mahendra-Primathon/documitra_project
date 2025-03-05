// constants/serviceConstants.ts
export interface AccordionItem {
  id: string;
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const FAQ_ACCORDION_DATA: AccordionItem[] = [
  {
    id: "oci",
    title: "OCI",
    questions: [
      {
        question: "1. Who is eligible to apply for OCI?",
        answer:
          "Foreign nationals of Indian origin, including those whose ancestors were Indian citizens or eligible for Indian citizenship on or after 26.01.1950.",
      },
      {
        question:
          "2. Who was eligible to become a Citizen of India on 26.01.1950?",
        answer:
          "Individuals born in India or with parents/grandparents born in India before independence.",
      },
      {
        question: "3. How to apply for an OCI card?",
        answer:
          "Submit the application online via the Ministry of Home Affairs portal, upload documents, and visit the nearest Indian mission for biometrics.",
      },
      {
        question: "4. What documents are required for OCI?",
        answer:
          "Proof of Indian origin, current passport, surrender certificate (if applicable), and photographs.",
      },
      {
        question: "5. What are the benefits of an OCI card?",
        answer:
          "Lifelong visa, multiple entries, exemption from FRRO registration, and parity with NRIs in financial/educational sectors.",
      },
      {
        question: "6. Is OCI equivalent to Indian citizenship?",
        answer:
          "No, OCI holders cannot vote, hold constitutional posts, or buy agricultural land.",
      },
      {
        question: "7. Can OCI be converted to citizenship?",
        answer:
          "Yes, after 5 years of OCI registration and 1 year of residency in India.",
      },
      {
        question: "8. What is the processing time for OCI?",
        answer: "6–8 weeks, subject to document verification.",
      },
      {
        question: "9. Is there an age limit for OCI?",
        answer: "No, minors with Indian-origin parents can apply.",
      },
      {
        question: "10. Can OCI holders work in India?",
        answer: "Yes, except in restricted sectors like defense.",
      },
      {
        question: "11. How to renew an OCI card?",
        answer:
          "Renewal is not required unless personal details change or the card is damaged.",
      },
      {
        question: "12. Can OCI be revoked?",
        answer:
          "Yes, for fraud, national security concerns, or hostile activities.",
      },
      {
        question: "13. Is OCI valid if passport is renewed?",
        answer: "Yes, but you must re-issue OCI with the new passport details.",
      },
      {
        question: "14. Can OCI holders adopt Indian children?",
        answer: "Yes, subject to adoption laws and government approval.",
      },
      {
        question: "15. Can OCI holders inherit property?",
        answer: "Yes, they can inherit and own non-agricultural property.",
      },
      {
        question: "16. Are OCI holders eligible for Indian healthcare?",
        answer: "No, they must use private healthcare or insurance.",
      },
      {
        question: "17. Can OCI holders open NRO accounts?",
        answer: "Yes, with proper documentation.",
      },
      {
        question: "18. Do OCI holders need a visa for Nepal/Bhutan?",
        answer: "No, they can enter visa-free for up to 90 days.",
      },
      {
        question: "19. Can OCI be used as ID proof in India?",
        answer: "Yes, it’s a valid proof for most private/government services.",
      },
      {
        question: "20. How to replace a lost OCI card?",
        answer:
          "Apply for a duplicate via the OCI Miscellaneous Service portal.",
      },
    ],
  },
  {
    id: "visa",
    title: "VISA",
    questions: [
      {
        question: "1. What types of visas are available?",
        answer:
          "Tourist, business, employment, student, medical, e-visa, and transit visas.",
      },
      {
        question: "2. How to apply for an Indian visa?",
        answer:
          "Apply online via the Indian Visa Portal, submit documents, and schedule an embassy appointment.",
      },
      {
        question: "3. What is the validity of a tourist visa?",
        answer: "Up to 10 years with multiple entries (varies by nationality).",
      },
      {
        question: "4. Can a visa be extended?",
        answer: "Yes, apply to the FRRO with valid reasons and documents.",
      },
      {
        question: "5. What is an e-visa?",
        answer:
          "Electronic visa for tourism/business/medical visits, valid for 60 days and obtainable online.",
      },
      {
        question: "6. Which countries get visa-on-arrival?",
        answer: "Japan, South Korea, UAE, and 57 others (e-visa eligible).",
      },
      {
        question: "7. What documents are needed for a student visa?",
        answer: "Admission letter, financial proof, and passport-sized photos.",
      },
      {
        question: "8. Can I work on a tourist visa?",
        answer: "No, it’s illegal. Apply for an employment visa instead.",
      },
      {
        question: "9. How long does visa processing take?",
        answer: "3–10 working days, depending on type and embassy workload.",
      },
      {
        question: "10. What if my visa application is rejected?",
        answer:
          "Reapply after addressing the reason for rejection (e.g., insufficient documents).",
      },
      {
        question: "11. Is travel insurance mandatory?",
        answer: "Not for all visas, but recommended for medical/student visas.",
      },
      {
        question: "12. Can I convert a tourist visa to work visa?",
        answer:
          "Yes, by exiting India and reapplying with an employment offer.",
      },
      {
        question: "13. What is a medical attendant visa?",
        answer:
          "A visa for companions of medical patients, valid for the treatment period.",
      },
      {
        question: "14. Are there visas for journalists?",
        answer:
          "Yes, a special journalist visa with prior government approval.",
      },
      {
        question: "15. Can I get a visa for religious purposes?",
        answer: "Yes, apply for a missionary/religious visa.",
      },
      {
        question: "16. What is the fee for a business visa?",
        answer: "Varies by nationality and duration (e.g., $80–$200).",
      },
      {
        question:
          "17. Can I re-enter India after exiting on a single-entry visa?",
        answer: "No, you must apply for a new visa.",
      },
      {
        question: "18. How to track visa status?",
        answer: "Use the reference number on the Indian Visa Portal.",
      },
      {
        question: "19. What is a transit visa?",
        answer: "Short-term visa for layovers (up to 72 hours).",
      },
      {
        question: "20. Can I get a visa for a child born in India?",
        answer:
          "Yes, apply for a child’s visa with birth certificate and parents’ visas.",
      },
    ],
  },
  {
    id: "passport",
    title: "PASSPORT",
    questions: [
      {
        question: "1. How to apply for a passport?",
        answer:
          "Online via Passport Seva, fill form, book appointment, and visit the Passport Office.",
      },
      {
        question: "2. What documents are required?",
        answer:
          "Proof of address (Aadhar), DOB (birth certificate), and old passport (if any).",
      },
      {
        question: "3. What is Tatkal passport service?",
        answer:
          "Expedited processing (1–3 days) with higher fees and additional documents.",
      },
      {
        question: "4. How to renew an expiring passport?",
        answer: "Apply under 'Re-issue' on Passport Seva 1 year before expiry.",
      },
      {
        question: "5. What if my passport is lost?",
        answer:
          "File a police report and apply for a duplicate with an LOST passport application.",
      },
      {
        question: "6. Can I change my name on the passport?",
        answer: "Yes, submit a gazette notification or marriage certificate.",
      },
      {
        question: "7. What are the passport fees?",
        answer:
          "₹1,500–₹2,000 for fresh (normal) and ₹3,500–₹4,000 for Tatkal.",
      },
      {
        question: "8. How to track passport status?",
        answer: "Use the file number on Passport Seva or SMS service.",
      },
      {
        question: "9. Is police verification mandatory?",
        answer:
          "Yes, post-issuance for fresh passports and pre-issuance for Tatkal.",
      },
      {
        question: "10. What is an official passport?",
        answer:
          "A maroon passport issued to government officials for duty travel.",
      },
      {
        question: "11. Can minors get passports?",
        answer: "Yes, with parental consent and birth certificates.",
      },
      {
        question: "12. How to add a spouse’s name?",
        answer: "Submit a marriage certificate and apply for re-issue.",
      },
      {
        question: "13. Can NRI’s apply in India?",
        answer: "Yes, at any Passport Office with local address proof.",
      },
      {
        question: "14. What is the validity of a passport?",
        answer: "10 years for adults, 5 years for minors (below 18).",
      },
      {
        question: "15. How to correct errors in the passport?",
        answer: "Apply for re-issue with supporting documents.",
      },
      {
        question: "16. Can I hold dual passports?",
        answer: "No, Indian law prohibits dual citizenship.",
      },
      {
        question: "17. What is an ECR passport?",
        answer:
          "Emigration Check Required (ECR) for non-educated Indians seeking work abroad.",
      },
      {
        question: "18. How to surrender an Indian passport?",
        answer: "Submit it to the embassy after acquiring foreign citizenship.",
      },
      {
        question: "19. Can I travel with an expired passport?",
        answer: "No, renew it before international travel.",
      },
      {
        question: "20. What is a Jumbo passport?",
        answer:
          "A 60-page passport for frequent travelers (additional fee applies).",
      },
    ],
  },
  {
    id: "pancard",
    title: "PAN CARD",
    questions: [
      {
        question: "1. What is a PAN Card?",
        answer:
          "A 10-digit alphanumeric ID for tracking financial transactions and taxes.",
      },
      {
        question: "2. How to apply for PAN?",
        answer:
          "Online via NSDL/UTIITSL, submit Form 49A, and upload documents.",
      },
      {
        question: "3. What documents are required?",
        answer:
          "Proof of identity (Aadhar), address, and DOB (birth certificate).",
      },
      {
        question: "4. Can I apply for PAN offline?",
        answer: "Yes, submit Form 49A to PAN centers with documents.",
      },
      {
        question: "5. How to correct PAN details?",
        answer: "Submit a correction request via NSDL/UTIITSL with proof.",
      },
      {
        question: "6. What if my PAN card is lost?",
        answer: "Apply for a duplicate online (fee ₹50 + GST).",
      },
      {
        question: "7. Is PAN mandatory for bank accounts?",
        answer: "Yes, for opening and high-value transactions.",
      },
      {
        question: "8. Can foreigners get a PAN?",
        answer: "Yes, using Form 49AA and passport copies.",
      },
      {
        question: "9. What is the PAN-TAN difference?",
        answer: "TAN is for tax deductors; PAN is for individuals/entities.",
      },
      {
        question: "10. How to link PAN with Aadhar?",
        answer: "Via the Income Tax e-filing portal (mandatory).",
      },
      {
        question: "11. Can minors have PAN?",
        answer: "Yes, under ‘Representative Assessee’ category.",
      },
      {
        question: "12. What is PAN’s validity?",
        answer: "Lifelong, unless surrendered or duplicated.",
      },
      {
        question: "13. How to surrender a PAN?",
        answer: "Submit a request to the IT department with reason.",
      },
      {
        question: "14. Can I have multiple PANs?",
        answer: "No, it’s illegal. Penalty up to ₹10,000 applies.",
      },
      {
        question: "15. Is PAN required for mutual funds?",
        answer: "Yes, for investments above ₹50,000.",
      },
      {
        question: "16. How to update PAN after marriage?",
        answer: "Submit name change proof via correction form.",
      },
      {
        question: "17. What is a e-PAN?",
        answer: "Electronic PAN issued via email (no physical card).",
      },
      {
        question: "18. Can NRIs apply for PAN?",
        answer: "Yes, using foreign address and passport.",
      },
      {
        question: "19. How to verify PAN authenticity?",
        answer: "Use the ‘Verify PAN’ feature on the Income Tax portal.",
      },
      {
        question: "20. Is PAN required for property purchase?",
        answer: "Yes, for transactions above ₹10 lakh.",
      },
    ],
  },
  {
    id: "driving-licence",
    title: "DRIVING LICENCE",
    questions: [
      {
        question: "1. How to apply for a driving licence?",
        answer:
          "Apply via the State RTO portal, pass learner’s and driving tests.",
      },
      {
        question: "2. What is a learner’s licence?",
        answer:
          "A temporary licence valid for 6 months, obtained after a written test.",
      },
      {
        question: "3. What documents are required?",
        answer:
          "Age proof (Aadhar), address proof, and medical certificate (for commercial).",
      },
      {
        question: "4. How to book a driving test?",
        answer: "Online via the RTO portal after 30 days of learner’s licence.",
      },
      {
        question: "5. What is the validity of a DL?",
        answer: "20 years or until age 50 (renew every 5 years post-50).",
      },
      {
        question: "6. How to renew a DL?",
        answer:
          "Apply online 30 days before expiry; test required if expired over 1 year.",
      },
      {
        question: "7. Can I get an international driving licence?",
        answer:
          "Yes, apply at the RTO with valid Indian DL and passport photos.",
      },
      {
        question: "8. What if my DL is lost?",
        answer:
          "Apply for a duplicate via Sarathi Parivahan portal with FIR (if stolen).",
      },
      {
        question: "9. How to change address on DL?",
        answer: "Submit proof of new address to RTO; no test required.",
      },
      {
        question: "10. What are the fees for a DL?",
        answer: "₹200–₹1,000 (varies by state and vehicle type).",
      },
      {
        question: "11. Can I apply for DL online?",
        answer: "Yes, via the Parivahan Sewa portal for most states.",
      },
      {
        question: "12. What vehicles require a commercial DL?",
        answer: "Taxis, trucks, buses, and goods vehicles.",
      },
      {
        question: "13. Is a medical certificate mandatory?",
        answer: "Yes, for applicants above 40 or commercial licences.",
      },
      {
        question: "14. Can NRIs convert foreign DL to Indian?",
        answer: "Yes, within 1 year of residency, subject to tests.",
      },
      {
        question: "15. How to check DL status?",
        answer: "Track via application number on the RTO portal.",
      },
      {
        question: "16. What is a smart card DL?",
        answer: "A digital licence with a microchip for security.",
      },
      {
        question: "17. Can I drive a motorcycle with a car DL?",
        answer: "No, separate licence (MCWG) required for two-wheelers.",
      },
      {
        question: "18. What is the penalty for driving without DL?",
        answer: "Fine up to ₹5,000 and/or imprisonment up to 3 months.",
      },
      {
        question: "19. How to get a DL for electric vehicles?",
        answer: "Same process as regular DL; no separate category.",
      },
      {
        question: "20. Can I transfer my DL to another state?",
        answer: "Yes, apply for address change in the new state’s RTO.",
      },
    ],
  },
  {
    id: 'voter-id',
    title: 'VOTER ID',
    questions: [
      {
        question: "1. Who can apply for a Voter ID?",
        answer: "Indian citizens aged 18+ residing in their constituency."
      },
      {
        question: "2. How to apply for a Voter ID?",
        answer: "Online via NVSP portal or offline via Form 6 at the Electoral Office."
      },
      {
        question: "3. What documents are needed?",
        answer: "Proof of age (DOB), address (Aadhar), and passport-sized photos."
      },
      {
        question: "4. How to check voter registration status?",
        answer: "Search by EPIC number or details on the Electoral Search portal."
      },
      {
        question: "5. Can I update my Voter ID address?",
        answer: "Yes, submit Form 8A with new address proof."
      },
      {
        question: "6. What if my Voter ID is lost?",
        answer: "Apply for a duplicate via Form EPIC-002 or online."
      },
      {
        question: "7. Can NRIs vote in elections?",
        answer: "Yes, but only in person at their registered constituency."
      },
      {
        question: "8. How to delete a deceased voter?",
        answer: "Submit Form 7 with a death certificate."
      },
      {
        question: "9. Can I vote without a Voter ID?",
        answer: "Yes, using alternate ID (Aadhar, Passport) if registered."
      },
      {
        question: "10. What is the Electoral Photo Identity Card (EPIC)?",
        answer: "The official Voter ID card with photo and unique EPIC number."
      },
      {
        question: "11. How to correct details on Voter ID?",
        answer: "Submit Form 8 with supporting documents."
      },
      {
        question: "12. Is Voter ID linked to Aadhar?",
        answer: "Voluntary linking is allowed via the NVSP portal."
      },
      {
        question: "13. Can I register in two constituencies?",
        answer: "No, it’s illegal. You must choose one permanent address."
      },
      {
        question: "14. How to find polling booth details?",
        answer: "Check the Electoral Search portal using EPIC number."
      },
      {
        question: "15. What is the deadline for registration?",
        answer: "Typically 10 days before the election notification."
      },
      {
        question: "16. Can I vote if I’ve moved cities?",
        answer: "Yes, after transferring registration to the new constituency."
      },
      {
        question: "17. What is Form 6?",
        answer: "Application for new voter registration or shifting constituencies."
      },
      {
        question: "18. Can students apply for Voter ID?",
        answer: "Yes, using their college/hostel address."
      },
      {
        question: "19. What is a Voter Slip?",
        answer: "A temporary slip issued before elections if Voter ID is unavailable."
      },
      {
        question: "20. How to object to a voter’s registration?",
        answer: "File Form 7 with evidence of ineligibility."
      }
    ]
  },
  {
    id: 'aadhar-card',
    title: 'AADHAR CARD',
    questions: [
      {
        question: "1. What is an Aadhar Card?",
        answer: "A 12-digit unique ID issued by UIDAI to Indian residents."
      },
      {
        question: "2. How to enroll for Aadhar?",
        answer: "Visit an enrollment center with proof of identity and address."
      },
      {
        question: "3. What documents are required?",
        answer: "POI (Passport, PAN), POA (Utility bills), and DOB proof."
      },
      {
        question: "4. Can NRIs get Aadhar?",
        answer: "Yes, if they’ve resided in India for 182+ days in the past year."
      },
      {
        question: "5. How to update Aadhar details?",
        answer: "Online via UIDAI portal or visit an enrollment center."
      },
      {
        question: "6. Is Aadhar mandatory?",
        answer: "Mandatory for PAN, ITR, and subsidies, but optional otherwise."
      },
      {
        question: "7. How to link Aadhar with PAN?",
        answer: "Via the Income Tax e-filing portal (mandatory for filing ITR)."
      },
      {
        question: "8. What if my Aadhar is lost?",
        answer: "Download e-Aadhar from UIDAI or request a reprint (₹50)."
      },
      {
        question: "9. Can minors get Aadhar?",
        answer: "Yes, Baal Aadhar (blue card) for children below 5."
      },
      {
        question: "10. How to check Aadhar status?",
        answer: "Use the enrollment number on the UIDAI website."
      },
      {
        question: "11. What is mAadhar?",
        answer: "A mobile app storing a digital Aadhar (requires biometric lock)."
      },
      {
        question: "12. How to lock Aadhar biometrics?",
        answer: "Via the UIDAI portal or mAadhar app for security."
      },
      {
        question: "13. Can I update my photo in Aadhar?",
        answer: "Yes, visit an enrollment center for biometric update."
      },
      {
        question: "14. What is the Aadhar Virtual ID?",
        answer: "A temporary 16-digit code to share instead of Aadhar number."
      },
      {
        question: "15. How to delink Aadhar from bank accounts?",
        answer: "Submit a request to your bank branch or online portal."
      },
      {
        question: "16. Is Aadhar valid as address proof?",
        answer: "Yes, for most government and private services."
      },
      {
        question: "17. Can I verify Aadhar online?",
        answer: "Yes, use the ‘Verify Aadhar’ feature on UIDAI’s website."
      },
      {
        question: "18. What is the Aadhar enrollment fee?",
        answer: "Free for first enrollment; ₹50–₹100 for updates."
      },
      {
        question: "19. How to change gender in Aadhar?",
        answer: "Submit a self-declaration form at an enrollment center."
      },
      {
        question: "20. Can OCI holders get Aadhar?",
        answer: "No, only Indian residents and NRIs meeting the 182-day rule."
      }
    ]
  },
];
