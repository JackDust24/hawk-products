/*

  This is a helper function that is used to display an image with a loading state.
*/

import { useState } from 'react';

export const ImageWithLoading = ({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-64">
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      <img
        src={src}
        alt={alt}
        className={`
            w-full h-full object-cover transition duration-500
            ${isLoading ? 'opacity-0' : 'opacity-100'}
            ${className}
          `}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        loading="lazy"
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400">Image not available</span>
        </div>
      )}
    </div>
  );
};
