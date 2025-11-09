"use client";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";

const Charts = () => {
  const { data: items } = useGetProductsQuery();

  // Aggregate data by category
  const aggregatedData = items?.reduce((acc, product) => {
    const existingCategory = acc.find((item) => item.name === product.category);
    if (existingCategory) {
      existingCategory.quantity += Number(product.stockProduct);
    } else {
      acc.push({
        name: product.category,
        StockProducts: Number(product.stockProduct),
      });
    }
    return acc;
  }, []);

  return (
    <div className="">
      <div className="flex justify-between mb-7">
        <div>
          <h1 className="text-xl capitalize">Stock products</h1>
          <hr className="bg-[#FF8042] py-[1.5px] w-[180px] rounded-tr-full rounded-tl-full" />
        </div>
      </div>
      <div className="mx-auto w-full md:w-[800px] md:px-0">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
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
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
