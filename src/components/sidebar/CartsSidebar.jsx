import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import CartsDetails from "../cartsDetails/CartsDetails";

const CartsSidebar = () => {
  const user = useAppSelector(useCurrentUser);
  const [orderCarts, setOrderCarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.email) {
        try {
          const res = await fetch(
            `http://localhost:5000/carts?email=${user?.email}`
          );
          const data = await res.json();
          setOrderCarts(data);
        } catch (error) {
          console.error("Error fetching order carts:", error);
        }
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3000); // Refetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [user]);

  console.log(orderCarts);

  return (
    <div className="px-5">
      <CartsDetails orderCarts={orderCarts} />
    </div>
  );
};

export default CartsSidebar;
