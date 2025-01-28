import { ProductListItem } from '@/types';
import { Link } from 'react-router-dom';
import { getImageUrl } from '@/utils/image';

type ProductCardProps = {
  product: ProductListItem;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, category } = product;

  return (
    <Link to={`/product/${id}`} className="group relative block overflow-hidden rounded-lg border">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src={getImageUrl(image)}
        alt={name}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = '/images/placeholder.jpg';
        }}
      />

      <div className="relative border-t bg-white p-6">
        <span className="whitespace-nowrap bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          {category}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900 line-clamp-1">{name}</h3>

        <p className="mt-1.5 text-sm text-gray-700">${price}</p>

        <p className="mt-4 text-sm text-blue-600 flex items-center gap-1 group-hover:font-medium transition-all">
          More Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </p>
      </div>
    </Link>
  );
};
