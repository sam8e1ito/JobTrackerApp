import { JobForm } from '@/shared/ui/jobForm';

import { useJobs } from '@/shared/hooks/useJobs';
import { Toast } from '@/shared/ui/Toast';

export const HomePage = () => {
  const { toast, setToast, form, setForm, editingId, submitJob, isFormValid } = useJobs();
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

      {toast && <Toast message={toast} duration={3000} onClose={() => setToast('')} />}
    </>
  );
};
