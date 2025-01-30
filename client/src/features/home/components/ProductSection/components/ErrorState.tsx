type ErrorStateProps = {
  message: string;
  onRetry: () => void;
};

const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="text-center mb-6 flex flex-col items-center">
          <header>
            <h2 className="text-2xl font-bold">Featured Products</h2>
          </header>
          <div className="text-center text-xl text-red-500">{message}</div>
          <button onClick={onRetry} className="btn btn-primary mt-4">
            Retry
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorState;
