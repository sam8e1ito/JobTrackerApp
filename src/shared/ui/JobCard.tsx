import type { Job, JobStatus } from '../types/content';

type Props = {
  job: Job;
  deleteJob: (id: string) => void;
  startEdit: (job: Job) => void;
  changeStatus: (id: string, status: JobStatus) => void;
};

export const JobCard = ({ job, deleteJob, startEdit, changeStatus }: Props) => {
  return (
    <div>
      <h3>{job.company}</h3>
      <p>{job.salary}</p>
      <p>{job.address}</p>
      <select
        value={job.status}
        onChange={(e) => changeStatus(job.id, e.target.value as JobStatus)}
      >
        <option value="pending">Pending</option>

        <option value="interview">Interview</option>

        <option value="accepted">Accepted</option>

        <option value="rejected">Rejected</option>
      </select>

      <button onClick={() => startEdit(job)}>Edit</button>
      <button onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
};
