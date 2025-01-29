type ToastProps = {
  message: string;
  type: 'error' | 'success' | 'info' | 'warning';
  onClose: () => void;
};

const getAlertStyle = (type: ToastProps['type']): string => {
  switch (type) {
    case 'success':
      return 'alert-success';
    case 'error':
      return 'alert-error';
    case 'warning':
      return 'alert-warning';
    case 'info':
      return 'alert-info';
    default:
      return 'alert-info';
  }
};

export const Toast = ({ message, type, onClose }: ToastProps) => {
  return (
    <div className="toast toast-end">
      <div className={`alert ${getAlertStyle(type)}`}>
        <span>{message}</span>
        <button onClick={onClose} className="btn btn-ghost btn-sm">
          OK
        </button>
      </div>
    </div>
  );
};
