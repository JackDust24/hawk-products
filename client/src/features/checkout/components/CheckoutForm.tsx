export const CheckoutForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label className="label">Email</label>
        <input type="email" className="input input-bordered w-full" />
      </div>
      <div>
        <label className="label">Shipping Address</label>
        <textarea className="textarea textarea-bordered w-full" />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Place Order
      </button>
    </form>
  );
};
