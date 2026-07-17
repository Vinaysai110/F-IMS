import advisor1 from '../assets/advisor-1.jpg';
import advisor2 from '../assets/advisor-2.jpg';
import advisor3 from '../assets/advisor-3.jpg';

export interface Advisor {
  number: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const advisors: Advisor[] = [
  {
    number: '01',
    name: 'Dr. Samuel Wright',
    role: 'Medical Advisor',
    description:
      'Provides expert clinical evaluation of medical claims and treatment records. Supports fraud detection through qualified medical assessment and second-opinion review.',
    image: advisor1,
  },
  {
    number: '02',
    name: 'Clara Vance, Esq.',
    role: 'Legal Advisor',
    description:
      'Reviews claims and investigation findings against applicable law and policy terms. Ensures every report is legally sound and defensible if challenged.',
    image: advisor2,
  },
  {
    number: '03',
    name: 'Arthur Vance',
    role: 'IRDA-Approved A-Grade Licensed Surveyor',
    description:
      'Conducts licensed, regulator-approved loss assessment and claim surveys. Brings certified expertise recognized under IRDA guidelines to every assessment.',
    image: advisor3,
  },
];
