import DashboardSidebar from "../../../components/sidebar/DashboardSidebar";
import AdminRoute from "../../../components/adminRoute/AdminRoute";

const layout = ({ children }) => {
  return (
    <AdminRoute>
      <div className="">
        <div className="md:flex justify-between">
          <div className="md:w-[15%] bg-[#E5E6E6]">
            <DashboardSidebar />
          </div>
          <div className="md:w-[85%] bg-base-200">{children}</div>
        </div>
      </div>
    </AdminRoute>
  );
};

export default layout;
