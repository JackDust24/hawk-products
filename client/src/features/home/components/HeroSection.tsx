import { useCategoriesStore } from '@/stores/categoriesStore';
import { getImageUrl } from '@/utils/image';

export const HeroSection = () => {
  const categories = useCategoriesStore((state) => state.categories);

  if (categories.length === 0) {
    return (
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <div key={index} className="animate-pulse">
                <div className="h-64 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.id}
              className="relative h-[400px] overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt={category.name}
                src={getImageUrl(category.image)}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/25">
                <div className="absolute bottom-0 p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm/relaxed text-white/95">
                    {category.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
