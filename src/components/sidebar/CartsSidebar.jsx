import CartsDetails from "../CartsDetails";
import useCarts from "../hooks/useCarts";
const CartsSidebar = () => {
  const [carts] = useCarts();
  return (
    <div className="w-72">
      <CartsDetails carts={carts} />
    </div>
  );
};
export default CartsSidebar;
