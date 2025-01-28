type ToastProps = {
  message: string;
  onClose: () => void;
};

export const Toast = ({ message, onClose }: ToastProps) => {
  return (
    <div className="toast toast-end">
      <div className="alert alert-success">
        <span>{message}</span>
        <button onClick={onClose} className="btn btn-ghost btn-sm">
          OK
        </button>
      </div>
    </div>
  );
};
