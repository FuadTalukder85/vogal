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
  const { data: item } = useGetProductsQuery();

  // Transform the fetched data
  const chartData = item?.map((product) => ({
    name: product.category, // Use category as the name for X-axis
    quantity: product.stockProduct, // Use quantity for the bar chart
    price: product.price,
  }));

  return (
    <ComposedChart
      className="mt-10"
      width={1400}
      height={400}
      data={chartData}
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
      {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
      <Bar dataKey="quantity" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="price" stroke="#ff7300" />
      {/* <Scatter dataKey="cnt" fill="red" /> */}
    </ComposedChart>
  );
};

export default Charts;
