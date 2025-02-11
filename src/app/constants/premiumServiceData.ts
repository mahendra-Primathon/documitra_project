import rectangle1 from '../../../public/assets/images/Home/Rectangle 1.png';
import rectangle2 from '../../../public/assets/images/Home/Rectangle2 .svg';
import rectangle3 from '../../../public/assets/images/Home/Rectangle 3.svg';
import rectangle4 from '../../../public/assets/images/Home/Rectangle 4.svg';

import passport from '../../../public/assets/images/Home/PsPassport.svg';
import visa from '../../../public/assets/images/Home/PSvisa.svg';
import greenCard from '../../../public/assets/images/Home/psGreenVard.svg';


export interface ServiceProps {
  title: string;
  imageUrl: string;
  iconUrl: string;
  altText: string;
}

export const services: ServiceProps[] = [
  {
    title: "Visa",
    imageUrl: rectangle1,
    iconUrl: visa,
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  {
    title: "Green Card",
    imageUrl: rectangle3,
    iconUrl: greenCard,
    altText: "Green card Services"
  },
  {
    title: "NRI",
    imageUrl: rectangle4,
    iconUrl: passport,
    altText: "NRI Services"
  },
  {
    title: "Visa",
    imageUrl: rectangle1,
    iconUrl: visa,
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  {
    title: "Green Card",
    imageUrl: rectangle3,
    iconUrl: greenCard,
    altText: "Green card Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  {
    title: "NRI",
    imageUrl: rectangle4,
    iconUrl: passport,
    altText: "NRI Services"
  },
  {
    title: "Visa",
    imageUrl: rectangle1,
    iconUrl: visa,
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  // Add more services as needed
];