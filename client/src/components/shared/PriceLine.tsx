type PriceLineProps = {
  label: string;
  amount: number;
  isTotal?: boolean;
  className?: string;
};

export const PriceLine = ({ label, amount, isTotal = false, className }: PriceLineProps) => {
  const baseClasses = 'flex justify-between';
  const textClasses = isTotal ? `text-lg font-bold ${className}` : `text-sm ${className}`;

  return (
    <div className={`${baseClasses} ${textClasses}`}>
      <p className={isTotal ? '' : 'text-gray-600'}>{label}</p>
      <p className={isTotal ? '' : 'font-medium'}>${amount.toFixed(2)}</p>
    </div>
  );
};
