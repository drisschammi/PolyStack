import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";

import DatasetDashboardScreen from "./screens/dataset/DatasetScreen";
import DjangoDashboardScreen from "./screens/djangoDashboard/DjangoDashboardScreen";
import FlaskDashboardScreen from "./screens/flaskDashboard/FlaskDashboardScreen";
import NodeDashboardScreen from "./screens/nodeDashboard/NodeDashboardScreen";
import SpringBootDashboardScreen from "./screens/springbootDashboard/SpringBootDashboardScreen";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<DatasetDashboardScreen />} />
            <Route path="/django" element={<DjangoDashboardScreen />} />
            <Route path="/flask" element={<FlaskDashboardScreen />} />
            <Route path="/node" element={<NodeDashboardScreen />} />
            <Route path="/springboot" element={<SpringBootDashboardScreen />} />
          </Route>
        </Routes>
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;