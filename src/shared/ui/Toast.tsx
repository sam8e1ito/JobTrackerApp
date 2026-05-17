import { useEffect } from 'react';

type Props = {
  message: string;
  duration?: number;
  onClose: () => void;
};

export const Toast = ({ message, duration = 3000, onClose }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};
