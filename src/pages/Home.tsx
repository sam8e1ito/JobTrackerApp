import { JobForm } from '@/shared/ui/jobForm';
import { JobList } from '@/shared/ui/JobList';

import { useJobs } from '@/shared/hooks/useJobs';

export const HomePage = () => {
  const {
    jobs,
    form,
    setForm,
    editingId,
    deleteJob,
    startEdit,
    submitJob,
    isFormValid,
    changeStatus,
  } = useJobs();
  return (
    <>
      <h2>Home</h2>
      <JobForm
        form={form}
        setForm={setForm}
        editingId={editingId}
        submitJob={submitJob}
        isFormValid={isFormValid}
      />
      <JobList
        jobs={jobs}
        deleteJob={deleteJob}
        startEdit={startEdit}
        changeStatus={changeStatus}
      />
    </>
  );
};
