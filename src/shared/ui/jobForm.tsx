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
    <form onSubmit={handleSubmit} className="job-form">
      <input
        className="job-form__input"
        type="text"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
      />

      <input
        className="job-form__input"
        type="number"
        placeholder="Salary in €"
        value={form.salary > 0 ? form.salary : ''}
        onChange={(e) => setForm((prev) => ({ ...prev, salary: Number(e.target.value) }))}
      />

      <input
        className="job-form__input"
        type="text"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))}
      />

      <button className="job-form__submit" type="submit" disabled={!isFormValid}>
        {editingId ? 'Save' : 'Add'}
      </button>
    </form>
  );
};
