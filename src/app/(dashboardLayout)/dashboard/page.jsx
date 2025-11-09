"use client";
import dynamic from "next/dynamic";
import OverView from "../../../components/OverView";
import Orders from "../../../components/Orders";
import TrendingProduct from "../../../components/TrendingProduct";
import Charts from "../../../components/charts/Charts";
import PieChart from "../../../components/charts/PieChart";
import MonthlySalesChart from "../../../components/charts/MonthlySalesChart";
import AdminRoute from "../../../components/adminRoute/AdminRoute";

const DashboardPage = () => {
  return (
    <AdminRoute>
      <div className="">
        <div className="md:px-10 pb-10">
          <OverView />
          <div className="md:flex items-center justify-between bg-white md:p-3 md:mt-5">
            <Charts />
            <PieChart />
          </div>
          <MonthlySalesChart />
          <div className="grid grid-cols-12 mt-28 md:gap-5">
            <div className="col-span-12 md:col-span-6">
              <TrendingProduct />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Orders />
            </div>
          </div>
        </div>
      </div>
    </AdminRoute>
  );
};

export default dynamic(() => Promise.resolve(DashboardPage), { ssr: false });
