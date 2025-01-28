type QuantityInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export const QuantityInput = ({ value, onChange }: QuantityInputProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => value > 1 && onChange(value - 1)}
        className="h-6 w-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
        -
      </button>
      <span className="w-8 text-center text-sm">{value}</span>
      <button
        onClick={() => onChange(value + 1)}
        className="h-6 w-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
        +
      </button>
    </div>
  );
};
