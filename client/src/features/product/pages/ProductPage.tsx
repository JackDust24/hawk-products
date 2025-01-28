import { ProductDetails } from '../components/ProductDetails';

export const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails
        id={1}
        name="Test Product"
        price={99.99}
        description="Product description goes here"
        images={['/images/test.jpg']}
        category="Test Category"
      />
    </div>
  );
};
