export const FormInput = ({
  name,
  label,
  type = 'text',
  error
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
}) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      name={name}
      type={type}
      required
      className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
    />
    {error && <p className="text-sm text-error mt-1">{error}</p>}
  </div>
);
