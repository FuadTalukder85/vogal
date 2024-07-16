import DashboardSidebar from "../../../components/sidebar/DashboardSidebar";

const layout = ({ children }) => {
  return (
    <div className="md:min-h-screen my-2">
      <div className="md:flex justify-between">
        <div className="md:w-[15%]">
          <DashboardSidebar />
        </div>
        <div className="md:w-[85%] bg-base-200">{children}</div>
      </div>
    </div>
  );
};

export default layout;
