import { JobForm } from '@/shared/ui/jobForm';

import { useJobs } from '@/shared/hooks/useJobs';

export const HomePage = () => {
  const { form, setForm, editingId, submitJob, isFormValid } = useJobs();
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
    </>
  );
};
