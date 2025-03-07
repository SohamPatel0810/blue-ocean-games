import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import FooterSection from "./Footer";
import { useState, useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const [footerVisible, setFooterVisible] = useState(false);

  const showFooter = location.pathname === "/";

  useEffect(() => {
    const timer = setTimeout(() => {
      setFooterVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {footerVisible && showFooter && <FooterSection />}
    </div>
  );
};

export default Layout;
