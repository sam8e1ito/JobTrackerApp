import type { Job } from '../types/content';
import { JobCard } from './JobCard';

type Props = {
  jobs: Job[];
  deleteJob: (id: string) => void;
  startEdit: (job: Job) => void;
};

export const JobList = ({ jobs, deleteJob, startEdit }: Props) => {
  return (
    <>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} deleteJob={deleteJob} startEdit={startEdit} />
      ))}
    </>
  );
};
