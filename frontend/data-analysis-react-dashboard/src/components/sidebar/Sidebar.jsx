import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  MdOutlineClose, MdOutlineGridView
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";
const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const location = useLocation(); // Use useLocation to get the current URL
  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Function to check if the link is active based on the current URL
  const isActive = (path) => location.pathname === path;
  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`} ref={navbarRef}>
      <div className="sidebar-top">
        <div className="sidebar-company">
          <span className="sidebar-company-text">*.*.*</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">

            {/* Django */}
            <li className="menu-item">
              <Link
                to="/django"
                className={`menu-link ${isActive("/django") ? "active" : ""}`} // Apply "active" class based on URL
              >
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard - Django</span>
              </Link>
            </li>

            {/* Flask */}
            <li className="menu-item">
              <Link
                to="/flask"
                className={`menu-link ${isActive("/flask") ? "active" : ""}`} // Apply "active" class based on URL
              >
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard - Flask</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;