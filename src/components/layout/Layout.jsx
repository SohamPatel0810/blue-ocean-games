import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import FooterSection from "./Footer";

const Layout = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;
