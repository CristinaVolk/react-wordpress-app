import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import Navbar from "./components/navbar";
import SideBarLeft from "./components/sidebar-left";
import SideBarRight from "./components/sidebar-right";
import Footer from "./components/footer";
import "./styles.css";

const App = () => {
  const routes = useRoutes();
  return (
    <Router>
      <div className='main-container' id='outer-container'>
        <Navbar />
        <SideBarLeft
          pageWrapId='page-wrap'
          outerContainerId='outer-container'
        />
        <SideBarRight />
        {routes}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
