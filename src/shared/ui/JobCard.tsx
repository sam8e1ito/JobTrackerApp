import type { Job, JobStatus } from '../types/content';

type Props = {
  job: Job;
  deleteJob: (id: string) => void;
  startEdit: (job: Job) => void;
  changeStatus: (id: string, status: JobStatus) => void;
};

export const JobCard = ({ job, deleteJob, startEdit, changeStatus }: Props) => {
  return (
    <div className="job-card">
      <h3 className="job-card__company">{job.company}</h3>
      <p className="job-card__salary">{job.salary}€</p>
      <p className="job-card__address">{job.address}</p>
      <select
        className="job-card__select"
        value={job.status}
        onChange={(e) => changeStatus(job.id, e.target.value as JobStatus)}
      >
        <option value="pending">Pending</option>

        <option value="interview">Interview</option>

        <option value="accepted">Accepted</option>

        <option value="rejected">Rejected</option>
      </select>
      <div className="job-card__actions">
        <button className="job-card__btn-edit" onClick={() => startEdit(job)}>
          Edit
        </button>
        <button className="job-card__btn-delete" onClick={() => deleteJob(job.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
