export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Case Assignment',
    description: 'Claims are securely received and assigned to experienced investigators.',
  },
  {
    number: '02',
    title: 'Document Review',
    description: 'Policy records and claim documents are carefully evaluated.',
  },
  {
    number: '03',
    title: 'Field Investigation',
    description: 'Independent field verification is conducted with professionalism and discretion.',
  },
  {
    number: '04',
    title: 'Evidence Collection',
    description: 'Relevant evidence is gathered through verified sources and documentation.',
  },
  {
    number: '05',
    title: 'Verification & Analysis',
    description: 'All findings are analyzed to ensure factual accuracy and consistency.',
  },
  {
    number: '06',
    title: 'Quality Review',
    description: 'Reports undergo rigorous quality checks before finalization.',
  },
  {
    number: '07',
    title: 'Final Report Submission',
    description: 'A clear, evidence-backed report is delivered within the committed timeframe.',
  },
];

export const turnaroundNotes = [
  { label: 'Investigation Reports', value: '5–9 Working Days' },
  { label: 'Claim Verification', value: '5 Working Days' },
];
