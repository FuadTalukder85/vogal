"use client";
import dynamic from "next/dynamic";
import { PieChart, Pie, Cell } from "recharts";
import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";

const PieCharts = () => {
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

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#5CFEFF",
    "#945CFF",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#1c1c1c"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${aggregatedData[index].name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="w-full overflow-x-scroll">
      <PieChart width={400} height={400} className="mx-auto">
        <Pie
          data={aggregatedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
          dataKey="StockProducts"
        >
          {aggregatedData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

// export default PieCharts;
export default dynamic(() => Promise.resolve(PieCharts), { ssr: false });
