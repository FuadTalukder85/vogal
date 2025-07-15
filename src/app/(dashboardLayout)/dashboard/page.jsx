"use client";
import dynamic from "next/dynamic";
import OverView from "../../../components/OverView";
import Orders from "../../../components/Orders";
import TrendingProduct from "../../../components/TrendingProduct";
import Charts from "../../../components/charts/Charts";
import PieChart from "../../../components/charts/PieChart";
import AdminRoute from "../../../components/adminRoute/AdminRoute";

const DashboardPage = () => {
  return (
    <AdminRoute>
      <div className="">
        <div className="md:px-10 pb-10">
          <OverView></OverView>
          <div className="md:flex items-center justify-between">
            <Charts></Charts>
            <PieChart></PieChart>
          </div>
          <div className="grid grid-cols-12 mt-16 md:gap-16">
            <div className="col-span-12 md:col-span-6">
              <TrendingProduct></TrendingProduct>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Orders></Orders>
            </div>
          </div>
        </div>
      </div>
    </AdminRoute>
  );
};

export default dynamic(() => Promise.resolve(DashboardPage), { ssr: false });
