type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}: ModalProps) => {
  return (
    <>
      <input type="checkbox" className="modal-toggle" checked={isOpen} onChange={onClose} />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button className="btn btn-ghost" onClick={onClose}>
              {cancelText}
            </button>
            <button className="btn btn-error" onClick={onConfirm}>
              {confirmText}
            </button>
          </div>
        </div>
        <label className="modal-backdrop" onClick={onClose} />
      </div>
    </>
  );
};
