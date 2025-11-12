import DashboardSidebar from "../../../components/sidebar/DashboardSidebar";
import AdminRoute from "../../../components/adminRoute/AdminRoute";
import DashNav from "../../../components/shared/DashNav";

const layout = ({ children }) => {
  return (
    <AdminRoute>
      <div className="">
        <div className="md:flex justify-between">
          <div className="md:w-[15%] bg-[#262D34] border-r border-gray-500">
            <DashboardSidebar />
          </div>
          <div className="md:w-[85%] bg-base-200">
            <DashNav />
            {children}
          </div>
        </div>
      </div>
    </AdminRoute>
  );
};

export default layout;
