import { ITEMS_PER_PAGE } from '@/constants';

const LoadingState = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="text-center mb-6">
          <header>
            <h2 className="text-2xl font-bold">Featured Products</h2>
          </header>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
            <div key={index} className="animate-pulse space-y-3 p-4 bg-white shadow-sm rounded-lg">
              <div className="h-56 bg-gray-200 rounded-lg"></div>
              <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
              <div className="flex justify-between items-center">
                <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadingState;
