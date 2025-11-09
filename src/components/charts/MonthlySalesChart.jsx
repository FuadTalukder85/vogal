"use client";
import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGetPaymentsQuery } from "../../redux/features/paymentApi/PaymentApi";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MonthlySalesChart = () => {
  const { data: payments = [] } = useGetPaymentsQuery();

  // ✅ put them here (global to the component)
  const now = new Date();
  const currentYear = now.getFullYear();
  const prevYear = currentYear - 1;

  const chartData = useMemo(() => {
    if (!payments.length) return [];

    const monthlyData = {};

    payments.forEach((payment) => {
      if (!payment.date) return;

      // parse dd/mm/yyyy
      const [day, month, year] = payment.date.split("/");
      const monthIndex = parseInt(month) - 1;
      const yearNum = parseInt(year);
      const key = `${monthIndex}-${yearNum}`;

      if (!monthlyData[key]) {
        monthlyData[key] = { month: monthIndex, year: yearNum, total: 0 };
      }
      monthlyData[key].total += payment.price;
    });

    return monthNames.map((m, i) => ({
      month: m,
      uv: monthlyData[`${i}-${currentYear}`]?.total || 0,
      pv: monthlyData[`${i}-${prevYear}`]?.total || 0,
    }));
  }, [payments, currentYear, prevYear]);

  return (
    <div className="w-full h-[400px] my-5 bg-white md:p-3">
      <div className="flex justify-between mb-7">
        <div>
          <h1 className="text-xl capitalize">Monthly sales chart</h1>
          <hr className="bg-[#FF8042] py-[1.5px] w-[190px] rounded-tr-full rounded-tl-full" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* ✅ no more undefined */}
          <Bar dataKey="pv" fill="#8884d8" name={`${prevYear}`} />
          <Bar dataKey="uv" fill="#82ca9d" name={`${currentYear}`} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlySalesChart;
