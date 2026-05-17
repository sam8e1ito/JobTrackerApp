import { useJobs } from '@/shared/hooks/useJobs';
import { JobDashboardCard } from '@/shared/ui/JobDashboardCard';

export const DashboardPage = () => {
  const { jobs } = useJobs();

  const totalJobs = jobs.length;

  const pendingJobs = jobs.filter((job) => job.status === 'pending').length;
  const interviewJobs = jobs.filter((job) => job.status === 'interview').length;
  const acceptedJobs = jobs.filter((job) => job.status === 'accepted').length;
  const rejectedJobs = jobs.filter((job) => job.status === 'rejected').length;

  return (
    <>
      <h2>Dashboard</h2>
      <JobDashboardCard title="Total Jobs:" job={totalJobs} />
      {pendingJobs > 0 ? <JobDashboardCard title="Pending Jobs:" job={pendingJobs} /> : null}
      {interviewJobs > 0 ? <JobDashboardCard title="Interview Jobs:" job={interviewJobs} /> : null}
      {acceptedJobs > 0 ? <JobDashboardCard title="Accepted Jobs:" job={acceptedJobs} /> : null}
      {rejectedJobs > 0 ? <JobDashboardCard title="Rejected Jobs:" job={rejectedJobs} /> : null}
    </>
  );
};
