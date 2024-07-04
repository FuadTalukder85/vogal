import CartsDetails from "../cartsDetails/CartsDetails";
import useCarts from "../hooks/useCarts";

const CartsSidebar = () => {
  const { carts, error } = useCarts();
  // console.log(carts);

  return (
    <div className="px-5">
      <CartsDetails carts={carts} />
    </div>
  );
};

export default CartsSidebar;
