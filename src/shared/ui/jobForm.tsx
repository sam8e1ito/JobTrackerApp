import type { JobFormState } from '../types/content';

type Props = {
  form: JobFormState;
  setForm: React.Dispatch<React.SetStateAction<JobFormState>>;
  editingId: string | null;
  submitJob: () => void;
  isFormValid: boolean;
};

export const JobForm = ({ form, setForm, editingId, submitJob, isFormValid }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    submitJob();
  };

  return (
    <form onSubmit={handleSubmit} id="jobForm">
      <input
        type="text"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
      />

      <input
        type="number"
        placeholder="Salary"
        value={form.salary}
        onChange={(e) => setForm((prev) => ({ ...prev, salary: Number(e.target.value) }))}
      />

      <input
        type="text"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))}
      />

      <button type="submit" disabled={!isFormValid}>
        {editingId ? 'Save' : 'Add'}
      </button>
    </form>
  );
};
