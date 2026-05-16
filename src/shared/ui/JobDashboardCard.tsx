type Props = {
  title: string;
  job: number;
};

export const JobDashboardCard = ({ title, job }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{job}</p>
    </div>
  );
};
