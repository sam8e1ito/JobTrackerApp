export type Theme = 'light' | 'dark';

export type JobStatus = 'pending' | 'interview' | 'accepted' | 'rejected';
export type Job = {
  id: string;
  company: string;
  salary: number;
  address: string;
  status: JobStatus;
};
export type JobFormState = {
  company: string;
  salary: number;
  address: string;
};
