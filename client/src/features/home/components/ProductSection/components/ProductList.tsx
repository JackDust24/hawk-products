import { ProductCard } from './ProductCard';
import { ProductListItem } from '@/types';

type ProductListProps = {
  products: Array<ProductListItem>;
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
