import type { Job } from '../types/content';

type Props = {
  job: Job;
  deleteJob: (id: string) => void;
  startEdit: (job: Job) => void;
};

export const JobCard = ({ job, deleteJob, startEdit }: Props) => {
  return (
    <div>
      <h3>{job.company}</h3>
      <p>{job.salary}</p>
      <p>{job.address}</p>
      <p>{job.status}</p>

      <button onClick={() => startEdit(job)}>Edit</button>
      <button onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
};
