type ErrorFallbackProps = {
  message: string;
  onRetry?: () => void;
};

export const ErrorFallback = ({ message, onRetry }: ErrorFallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg text-gray-600 mt-2">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Retry
        </button>
      )}
    </div>
  );
};
