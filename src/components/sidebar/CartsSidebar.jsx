import CartsDetails from "../cartsDetails/CartsDetails";
import useCarts from "../hooks/useCarts";

const CartsSidebar = () => {
  const { carts } = useCarts;

  return (
    <div className="px-5">
      <CartsDetails orderCarts={carts} />
    </div>
  );
};

export default CartsSidebar;
