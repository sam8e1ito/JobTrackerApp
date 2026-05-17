import type { Job, JobStatus } from '../types/content';
import { JobCard } from './JobCard';

type Props = {
  jobs: Job[];
  deleteJob: (id: string) => void;
  startEdit: (job: Job) => void;
  changeStatus: (id: string, status: JobStatus) => void;
};

export const JobList = ({ jobs, deleteJob, startEdit, changeStatus }: Props) => {
  return (
    <div className="job-list">
      {[...jobs].reverse().map((job) => (
        <JobCard
          key={job.id}
          job={job}
          deleteJob={deleteJob}
          startEdit={startEdit}
          changeStatus={changeStatus}
        />
      ))}
    </div>
  );
};
