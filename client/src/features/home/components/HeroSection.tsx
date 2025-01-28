export const HeroSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Laptop"
              src="/images/test.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-white">Laptop Collection</h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Discover our premium selection of laptops for work and play
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Accessories"
              src="/images/test.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-white">Accessories Collection</h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Enhance your tech experience with our curated accessories
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Cameras"
              src="/images/test.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-white">Camera Collection</h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Capture life's moments with our professional cameras
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
