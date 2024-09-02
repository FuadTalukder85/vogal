import DashboardSidebar from "../../../components/sidebar/DashboardSidebar";
import AdminRoute from "../../../components/adminRoute/AdminRoute";

const layout = ({ children }) => {
  return (
    <AdminRoute>
      <div className="md:min-h-screen">
        <div className="md:flex justify-between">
          <div className="md:w-[15%]">
            <DashboardSidebar />
          </div>
          <div className="md:w-[85%] bg-base-200">{children}</div>
        </div>
      </div>
    </AdminRoute>
  );
};

export default layout;
