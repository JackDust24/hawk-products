export const CheckoutForm = () => {
  return (
    <div className="max-w-md space-y-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input type="text" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="text-sm font-medium">Address</label>
          <input type="text" className="input input-bordered w-full" />
        </div>
      </div>

      <button className="btn btn-primary w-full">Place Order</button>
    </div>
  );
};
