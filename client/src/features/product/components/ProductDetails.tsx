interface ProductDetailsProps {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
}

export const ProductDetails = ({ name, price, description, images }: ProductDetailsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="aspect-square">
        <img src={images[0]} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-2xl">${price}</p>
        <p className="text-gray-600">{description}</p>
        <button className="btn btn-primary w-full">Add to Cart</button>
      </div>
    </div>
  );
};
