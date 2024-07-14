import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const useCarts = () => {
  const user = useAppSelector(useCurrentUser);
  const [carts, setCarts] = useState([]);
  const [error, setError] = useState(null);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.email) {
        try {
          const res = await fetch(
            `http://localhost:5000/cart?email=${user?.email}`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch order carts");
          }
          const data = await res.json();
          setCarts(data);
        } catch (error) {
          setError(error.message);
          console.error("Error fetching order carts:", error);
        }
      } else {
        setCarts([]);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, [user]);

  return [carts, error];
};

export default useCarts;
