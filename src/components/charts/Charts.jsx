import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";

const Charts = () => {
  const { data: items, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Aggregate data by category
  const aggregatedData = items?.reduce((acc, product) => {
    const existingCategory = acc.find((item) => item.name === product.category);
    if (existingCategory) {
      existingCategory.quantity += Number(product.stockProduct);
      // existingCategory.price += Number(product.price);
    } else {
      acc.push({
        name: product.category,
        StockProducts: Number(product.stockProduct),
        // price: Number(product.price),
      });
    }
    return acc;
  }, []);

  return (
    <ComposedChart
      className="mt-10"
      width={1400}
      height={400}
      data={aggregatedData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="StockProducts" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="StockProducts" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default Charts;
