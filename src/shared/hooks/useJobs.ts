import { useEffect, useState } from 'react';
import type { Job, JobStatus } from '@/shared/types/content';
import { JOB_APPLICATION_KEY } from '@/shared/constants/localStorage';

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>(() => {
    const stored = localStorage.getItem(JOB_APPLICATION_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [toast, setToast] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openCreate = () => {
    setForm({
      company: '',
      salary: 0,
      address: '',
    });

    setEditingId(null);
    setIsModalOpen(true);
  };

  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    company: '',
    salary: 0,
    address: '',
  });

  const isFormValid = form.company.trim() !== '' && form.address.trim() !== '' && form.salary > 0;

  useEffect(() => {
    localStorage.setItem(JOB_APPLICATION_KEY, JSON.stringify(jobs));
  }, [jobs]);

  const resetForm = () => {
    setForm({
      company: '',
      salary: 0,
      address: '',
    });
  };

  const addJob = () => {
    const newJob: Job = {
      id: crypto.randomUUID(),
      company: form.company,
      salary: form.salary,
      address: form.address,
      status: 'pending',
    };

    setJobs((prev) => [...prev, newJob]);
    resetForm();
    setToast('Job created');
  };

  const deleteJob = (id: string) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
    setToast('Job deleted');
  };

  const startEdit = (job: Job) => {
    setForm({
      company: job.company,
      salary: job.salary,
      address: job.address,
    });

    setEditingId(job.id);
    setIsModalOpen(true);
  };

  const updateJob = () => {
    if (!editingId) return;

    setJobs((prev) =>
      prev.map((job) =>
        job.id === editingId
          ? { ...job, company: form.company, salary: form.salary, address: form.address }
          : job,
      ),
    );

    setEditingId(null);
    resetForm();
    setToast('Job updated');
  };

  const submitJob = () => {
    if (editingId) {
      updateJob();
    } else {
      addJob();
    }

    closeModal();
  };

  const changeStatus = (id: string, status: JobStatus) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,
              status,
            }
          : job,
      ),
    );

    setToast('Status changed');
  };

  return {
    toast,
    setToast,

    jobs,

    form,
    setForm,

    editingId,

    addJob,
    deleteJob,
    startEdit,
    submitJob,

    isFormValid,
    isModalOpen,

    closeModal,
    openCreate,

    changeStatus,
  };
};
