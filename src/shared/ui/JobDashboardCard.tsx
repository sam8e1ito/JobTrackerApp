type Props = {
  title: string;
  job: number;
  status: 'total' | 'pending' | 'interview' | 'accepted' | 'rejected';
};

export const JobDashboardCard = ({ title, job, status }: Props) => {
  return (
    <div className="dashboard-card" data-status={status}>
      <h3 className="dashboard-card__title">{title}</h3>
      <p className="dashboard-card__value">{job}</p>
    </div>
  );
};
