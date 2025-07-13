import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../main/index";
const RootLayout = () => {
  return (
    <div className="w-full h-fit">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
