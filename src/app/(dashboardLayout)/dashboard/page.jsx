"use client";
import dynamic from "next/dynamic";
import OverView from "../../../components/overView/OverView";
import Orders from "../../../components/orders/Orders";
import TrendingProduct from "../../../components/trendingProduct/TrendingProduct";
import Charts from "../../../components/charts/Charts";
import PieChart from "../../../components/pieChart/PieChart";
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
