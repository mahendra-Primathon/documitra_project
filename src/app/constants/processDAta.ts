import step1 from "../../../public/assets/images/Home/step1.svg";
import step2 from "../../../public/assets/images/Home/step2.svg";
import step3 from "../../../public/assets/images/Home/step3.svg";
import step4 from "../../../public/assets/images/Home/step4.svg";

export interface ProcessStep {
  title: string;
  imageSrc: string;
  isLast: boolean;
}

export const steps: ProcessStep[] = [
  {
    title: "Step 01",
    imageSrc: step1,
    isLast: false,
  },
  {
    title: "Step 02",
    imageSrc: step2,
    isLast: false,
  },
  {
    title: "Step 03",
    imageSrc: step3,
    isLast: false,
  },
  {
    title: "Get Delivered at Your doorstep",
    imageSrc: step4,
    isLast: true,
  },
];