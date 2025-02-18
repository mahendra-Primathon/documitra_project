import visaImage from '../../../public/assets/images/Home/Rectangle 1.png';
import passportImage1 from '../../../public/assets/images/Home/Rectangle2 .svg';
import greenCardImage from '../../../public/assets/images/Home/Rectangle 3.svg';
import nriImage from '../../../public/assets/images/Home/Rectangle 4.svg';
import worldImage from '../../../public/assets/images/Home/rectangle5.svg';
import passportImage2 from '../../../public/assets/images/Home/rectangle6.svg';

import passportIcon from '../../../public/assets/images/Home/PsPassport.svg';
import visaIcon from '../../../public/assets/images/Home/PSvisa.svg';
import greenCardIcon from '../../../public/assets/images/Home/psGreenVard.svg';


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
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: passportImage1,
    iconUrl: greenCardIcon,
    altText: "Passport Services"
  },
  {
    title: "Green Card",
    imageUrl: greenCardImage,
    iconUrl: greenCardIcon,
    altText: "Green card Services"
  },
  {
    title: "NRI",
    imageUrl: nriImage,
    iconUrl: greenCardIcon,
    altText: "NRI Services"
  },
  {
    title: "World",
    imageUrl: worldImage,
    iconUrl: visaIcon,
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: passportImage2,
    iconUrl: visaIcon,
    altText: "Passport Services"
  },
  {
    title: "Passport",
    imageUrl: passportImage1,
    iconUrl: passportIcon,
    altText: "Passport Services"
  },
  {
    title: "Green Card",
    imageUrl: greenCardImage,
    iconUrl: greenCardIcon,
    altText: "Green card Services"
  },
  {
    title: "Passport",
    imageUrl: passportImage1,
    iconUrl: passportIcon,
    altText: "Passport Services"
  },
  {
    title: "NRI",
    imageUrl: nriImage,
    iconUrl: passportIcon,
    altText: "NRI Services"
  },
  {
    title: "Visa",
    imageUrl: visaImage,
    iconUrl: visaIcon,
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: passportImage1,
    iconUrl: passportIcon,
    altText: "Passport Services"
  },
  // Add more services as needed
];