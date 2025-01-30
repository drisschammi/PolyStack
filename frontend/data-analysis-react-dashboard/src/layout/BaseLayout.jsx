import { Outlet } from "react-router-dom";
import { AreaTop, Sidebar } from "../components";

const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <AreaTop />

        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
