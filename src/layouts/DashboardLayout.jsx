import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Breadcrumbs from "../components/Breadcrumbs";

const DashboardLayout = () => {
  return (
    <div className="flex  flex-col h-full w-full">
      <div className="flex flex-col min-h-[45rem] mt-[4rem]">
        {/* The Sidebar  */}
          <SideBar />
          

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
