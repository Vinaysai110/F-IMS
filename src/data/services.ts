import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-4.png';
import service5 from '../assets/service-5.png';
import service6 from '../assets/service-6.png';

export interface Service {
  number: string;
  name: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    number: '01',
    name: 'Life Claim Investigations',
    description:
      'IMS guarantees complete verification of vital statistics, medical reports, and client history to safeguard against misrepresentation and assure compliance.',
    image: service1,
  },
  {
    number: '02',
    name: 'Motor Accident Claims',
    description:
      'MACT investigations, motor OD, theft claims, and third-party liability investigations. Our field inspectors reconstruct accidents, gather local testimonies, and secure police records.',
    image: service2,
  },
  {
    number: '03',
    name: 'Medical Claim Investigations',
    description:
      'We analyze hospital treatment records, bills, and admission profiles, checking for discrepancies to detect potential padding or misaligned treatments.',
    image: service3,
  },
  {
    number: '04',
    name: 'Marine Claim Investigations',
    description:
      'We conduct transit loss verifications, examine cargo logs, and inspect hull damages under standard marine insurance terms.',
    image: service4,
  },
  {
    number: '05',
    name: 'Fire & Property Claims',
    description:
      'IMS determines direct cause of fire, evaluates stock records, and reviews structural safety markers to ensure accurate property assessment.',
    image: service5,
  },
  {
    number: '06',
    name: 'Cattle & Specialty Claims',
    description:
      'Rigorous field validations, RFID tag and brand-marker verification, and veterinarian report inspection to ensure integrity in specialty segments.',
    image: service6,
  },
];
