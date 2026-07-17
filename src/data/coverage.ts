import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-4.png';
import service5 from '../assets/service-5.png';
import service6 from '../assets/service-6.png';

export interface CoverageCard {
  number: string;
  category: string;
  name: string;
  description: string;
  imageLeft: string;
  imageRight: string;
}

export const coverageCards: CoverageCard[] = [
  {
    number: '01',
    category: 'Claim Types',
    name: 'Property & Marine',
    description: 'Fire, burglary, transit and cargo loss — structural and maritime claims verified on site.',
    imageLeft: service5,
    imageRight: service4,
  },
  {
    number: '02',
    category: 'Claim Types',
    name: 'Motor & Life',
    description: 'MACT and motor OD investigations alongside life claim verification and history checks.',
    imageLeft: service2,
    imageRight: service1,
  },
  {
    number: '03',
    category: 'Claim Types',
    name: 'Medical & Specialty',
    description: 'Hospital record audits paired with cattle and specialty-segment field validations.',
    imageLeft: service3,
    imageRight: service6,
  },
];
