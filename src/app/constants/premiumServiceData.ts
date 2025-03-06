import visaImage from "../../../public/assets/images/Home/Rectangle 1.png";
import passportImage1 from "../../../public/assets/images/Home/Rectangle2 .svg";
import greenCardImage from "../../../public/assets/images/Home/Rectangle 3.svg";
import nriImage from "../../../public/assets/images/Home/Rectangle 4.svg";
import worldImage from "../../../public/assets/images/Home/Rectangle 4.svg";
import passportImage2 from "../../../public/assets/images/Home/Rectangle 1.png";

import passportIcon from "../../../public/assets/images/Home/PsPassport.svg";
import visaIcon from "../../../public/assets/images/Home/PSvisa.svg";
import greenCardIcon from "../../../public/assets/images/Home/psGreenVard.svg";

export interface ServiceProps {
  title: string;
  imageUrl: string;
  iconUrl: string;
  altText: string;
}

export const services: ServiceProps[] = [
  {
    title: "Visa",
    imageUrl: visaImage,
    iconUrl: visaIcon,
    altText: "Visa Services",
  },
  {
    title: "Passport",
    imageUrl: passportImage1,
    iconUrl: visaIcon,
    altText: "Passport Services",
  },
  {
    title: "Green Card",
    imageUrl: greenCardImage,
    iconUrl: visaIcon,
    altText: "Green card Services",
  },
  {
    title: "NRI",
    imageUrl: nriImage,
    iconUrl: visaIcon,
    altText: "NRI Services",
  },
  {
    title: "World",
    imageUrl: worldImage,
    iconUrl: visaIcon,
    altText: "Visa Services",
  },
  {
    title: "Citizenship",
    imageUrl: passportImage2,
    iconUrl: visaIcon,
    altText: "Citizenship Services",
  },
  {
    title: "Immigration",
    imageUrl: passportImage1,
    iconUrl: visaIcon,
    altText: "Immigration Assistance",
  },
  {
    title: "Work Permit",
    imageUrl: greenCardImage,
    iconUrl: visaIcon,
    altText: "Work Permit Applications",
  },
  {
    title: "Study Abroad",
    imageUrl: passportImage1,
    iconUrl: visaIcon,
    altText: "Study Abroad Guidance",
  },

  {
    title: "Legal Advice",
    imageUrl: nriImage,
    iconUrl: visaIcon,
    altText: "Immigration Legal Advice",
  },
  {
    title: "Family Sponsorship",
    imageUrl: visaImage,
    iconUrl: visaIcon,
    altText: "Family Sponsorship Programs",
  },
  {
    title: "Appeals",
    imageUrl: passportImage1,
    iconUrl: visaIcon,
     altText: "Immigration Appeals Assistance"
  },
  // Add more services as needed
];
