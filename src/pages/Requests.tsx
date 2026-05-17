import { JobList } from '@/shared/ui/JobList';
import { useJobs } from '@/shared/hooks/useJobs';
import { JobForm } from '@/shared/ui/jobForm';

export const RequestsPage = () => {
  const {
    jobs,
    deleteJob,
    startEdit,
    isModalOpen,
    closeModal,
    form,
    setForm,
    editingId,
    submitJob,
    isFormValid,
    changeStatus,
  } = useJobs();
  return (
    <>
      <h2>Requests</h2>
      {isModalOpen && (
        <div className="modal">
          <JobForm
            form={form}
            setForm={setForm}
            editingId={editingId}
            submitJob={submitJob}
            isFormValid={isFormValid}
          />

          <button onClick={closeModal}>Close</button>
        </div>
      )}
      {jobs.length > 0 ? (
        <JobList
          jobs={jobs}
          deleteJob={deleteJob}
          startEdit={startEdit}
          changeStatus={changeStatus}
        />
      ) : (
        <span>No jobs yet</span>
      )}
    </>
  );
};
