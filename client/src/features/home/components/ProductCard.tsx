import { ProductListItem } from '@/types';
import { Link } from 'react-router-dom';
import { getImageUrl } from '@/utils/image';
import { ImageWithLoading } from '../helpers';
import { ChevronRight } from 'lucide-react';

type ProductCardProps = {
  product: ProductListItem;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, category } = product;

  return (
    <Link to={`/product/${id}`} className="group relative block overflow-hidden rounded-lg border">
      <ImageWithLoading src={getImageUrl(image)} alt={name} className="group-hover:scale-105" />

      <div className="relative border-t bg-white p-6">
        <span className="whitespace-nowrap bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          {category}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900 line-clamp-1">{name}</h3>

        <p className="mt-1.5 text-sm text-gray-700">${price}</p>

        <p className="mt-4 text-sm text-blue-600 flex items-center gap-1 group-hover:font-medium transition-all">
          More Details
          <ChevronRight className="w-4 h-4" />
        </p>
      </div>
    </Link>
  );
};
